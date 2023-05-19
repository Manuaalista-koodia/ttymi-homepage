import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <p className={styles.footer__info__text}>Manuaalista menoa jo vuodesta 2015!</p>
        <p className={styles.footer__info__text}>ttymi@lists.tuni.fi</p>
        <p className={styles.footer__info__text}>© 2023 TTYMI</p>
      </div>

      {/* <Image className={styles.footer__logo} src={require('../public/logo-white.png')} alt='logo' /> */}

      <div className={styles.footer__links}>
        <div>ig</div>
        <div>fb</div>
      </div>
    </div>
  );
};

export default Footer;
