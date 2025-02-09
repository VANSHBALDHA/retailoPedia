import styles from './MainLayoutHeader.module.css';
import mobileIcon from '../../assets/images/mobile.png';
import { useTranslation } from 'react-i18next';

const MainLayoutHeader = () => {
  const {t} = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.mobileApp}>
        <a href='#'>
          <img className={`${styles.headerImg}`} src={mobileIcon} alt="Mobile Icon" />
          <p>{t('home.header.getApp')}</p>
        </a>
      </div>
      <button className={`${styles.headerButton} ${styles.joinButton}`}>{t('home.header.joinNow')}</button>
      <button className={`${styles.signInButton}`}>{t('home.header.signIn')}</button>
    </header>
  );
};

export default MainLayoutHeader;