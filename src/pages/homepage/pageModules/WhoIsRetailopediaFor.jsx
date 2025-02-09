import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import styles from './WhoIsRetailopediaFor.module.css';
import businessArrow from '../../../assets/images/business-arrow.png';
import storeImage from '../../../assets/images/store.jpg';

const WhoIsRetailopediaFor = () => {
  const {t} = useTranslation();
  const isRTL = useSelector((state)=> state.rtl.isRTL);

  return (
    // <section className={styles.retailopediaSection}>
    <section className={`${styles.retailopediaSection} ${isRTL ? styles.retailopediaSectionAr : ''}`}>
      <div className="container position-relative ">
        <div className="row ">
          <div className="col-md-6">
            <h3 className={styles.sectionHeading}>{t('home.homeOthrSec.whoRetailFor')}</h3>
            <span className={styles.sectionInfo}>{t('home.homeOthrSec.gatewayTxt')}</span>
            <div className={styles.businessLeadBox}>
              <div className={styles.businessBox}>
                <a href="#">{t('home.homeOthrSec.bussLdrsTxt')}</a>
                <img src={businessArrow} alt="Business Arrow" className={styles.businessBoxArrow} />
              </div>
              <div className={styles.businessBox}>
                <a href="#">{t('home.homeOthrSec.marktTxt')}</a>
                <img src={businessArrow} alt="Business Arrow" className={styles.businessBoxArrow} />
              </div>
              <div className={styles.businessBox}>
                <a href="#">{t('home.homeOthrSec.studentsTxt')}</a>
                <img src={businessArrow} alt="Business Arrow" className={styles.businessBoxArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`position-absolute ${isRTL ? styles.retailopediaImgAr : styles.retailopediaImg}`}>
        <img src={storeImage} alt="Retail Store" className={styles.storeImage} />
      </div>
    </section>
  );
};

export default WhoIsRetailopediaFor;