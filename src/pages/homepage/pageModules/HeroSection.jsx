import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './HeroSection.module.css';
import logo from '../../../assets/images/logo.jpg';
import background from '../../../assets/images/Background.png';
import peopleIllustration from '../../../assets/images/peoples.png';
import transparentImg from '../../../assets/images/trans-img.png';

const HeroSection = () => {
  const {t} = useTranslation();
  
  return (
    <div className={styles.heroSection}>
      <div className="container">
        <div className={`row ${styles.heroContentImg} align-items-center justify-content-between`}>
          <div className={`col-md-6 ${styles.heroContent}`}>
            <img src={logo} alt="Retailopedia Logo" className={styles.logo} />
            <p className={styles.tagline}>{t('home.heroArea.tagline')}</p>
            <p className={styles.heroDescription}>{t('home.heroArea.heroTxtOne')}</p>
            <p className={styles.heroDescription}>{t('home.heroArea.heroTxtTwo')}</p>
            <p className={styles.heroDescription}>{t('home.heroArea.heroTxtThree')}</p>
            <p className={styles.heroDescription}>{t('home.heroArea.heroTxtFour')}</p>
            <p className={styles.heroDescription}>{t('home.heroArea.tagline')}</p>
            <p className={styles.heroDescription}>{t('home.heroArea.heroTxtFive')}</p>

            <div className={styles.authButtons}>
              <button className={styles.googleButton}>
                <img src={background} alt="Google" />
                 {t('home.heroArea.googleSignup')}
              </button>
              <button className={styles.emailButton}>{t('home.heroArea.emailSignup')}</button>
            </div>

            <p className={styles.terms}>{t('home.heroArea.policyclick')}<br/>
              <a href="#"> {t('home.heroArea.usrAgreement')}</a>, 
              <a href="#"> {t('home.heroArea.privacyPolicy')}</a>, {t('home.heroArea.andtxt')}
              <a href="#"> {t('home.heroArea.cookiePolicy')}</a>
            </p>

            <p className={`terms my-3 ${styles.terms} ${styles.joinNowText} ${styles.newtopedia}`}>{t('home.heroArea.newtoRetailo')} <a className={styles.newtopedia}  href="#">{t('home.heroArea.joinNow')}</a></p>

          </div>
          <div className={`col-md-6 ${styles.heroImageContainer}`}>
            <img src={peopleIllustration} alt="People illustration" className={styles.heroImage} />
          </div>
        </div>
      </div>
      <div className={styles.bgImageHero}>
        <img src={transparentImg} alt="Background" />
      </div>
    </div>
  );
};

export default HeroSection;