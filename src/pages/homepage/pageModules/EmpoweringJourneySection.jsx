import { useTranslation } from 'react-i18next';

import styles from './EmpoweringJourneySection.module.css';
import empowerImage from '../../../assets/images/empower.png';

const EmpoweringJourneySection = () => {
  const {t} = useTranslation();

  return (
    <section className={styles.empoweringSection}>
      <div className={`container ${styles.container}`}>
        <div className={`row ${styles.empowerContent}`}>
          <div className="col-md-8">
            <h3 className={styles.sectionHeading}>{t('home.homeOthrSec.empwDesc')}</h3>
            <button className={styles.empowerButton}>{t('home.homeOthrSec.getStrtd')} </button>
          </div>
        </div>
      </div>
      <div className={styles.empoweringImg}>
        <img src={empowerImage} alt="Empower Illustration" className={styles.empowerImage} />
      </div>
    </section>
  );
};

export default EmpoweringJourneySection;