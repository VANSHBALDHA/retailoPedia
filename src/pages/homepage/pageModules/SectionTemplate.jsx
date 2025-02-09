import React, {useState, useEffect} from 'react';
import styles from './SharedSectionStyles.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const chunkArray = (array, chunkSize) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};


const SectionTemplate = ({ content, tags, backgroundStyle, tagColumns }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {  window.removeEventListener('resize', handleResize);};
  }, []); 


  const isMobile = windowWidth < 768;

  console.log('isMobile', isMobile);

  const tagRows = isMobile ? [] : chunkArray(tags, tagColumns);
  // const tagRows = chunkArray(tags, tagColumns);


    return (
      <section className={`${styles.sharedSection} ${backgroundStyle}`}>
        {isMobile}
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
                {content.map((cntObj, idx) => (
                  <>
                    <h2 key={`h2${idx}`} className={styles.sectionHeading}>{cntObj.title}</h2>
                    <p key={`desc${idx}`} className={styles.sectionDescription}>{cntObj.description}</p>
                  </>
                ))}
            </Col>
              
              {isMobile ? (
                <Col md={6}>
                <div className={styles.tagsContainer}>
                  {tags.map((row, rowIndex) => (
                    <button key={`inrtag${rowIndex}`} className={`${styles.tagButton} ${backgroundStyle}`}>{row}</button>
                  ))}
                </div>
              </Col>
              ) :
                <Col md={6}>
                  <div className={styles.tagsContainer}>
                    {tagRows.map((row, rowIndex) => (
                      <div key={`tag${rowIndex}`} className={styles.tagInnerCont}>
                        {row.map((tag, index) => (
                          <button key={`inrtag${index}`} className={`${styles.tagButton} ${backgroundStyle}`}>{tag}</button>
                        ))}
                      </div>
                    ))}
                  </div>
                </Col>
              }
          </Row>
        </Container>
      </section>
    );
  };
  
  export default SectionTemplate;