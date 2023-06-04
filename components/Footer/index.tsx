import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__info}>
        <p className={styles.footer__info__text}>Manuaalista menoa jo vuodesta 2015!</p>
        <p className={styles.footer__info__text}>ttymi@lists.tuni.fi</p>
        <p className={styles.footer__info__text}>© 2023 TTYMI</p>
      </div>

      {/* <Image className={styles.footer__logo} src={require('../../public/logo-white.png')} alt='logo' /> */}

      <div className={styles.footer__links}>
        <Link className={styles.footer__linkbg} href='https://www.instagram.com/ttymi_ry/' target='_blank'>
          <Image className={styles.footer__icon} src={require('../../public/insta.svg')} alt='instagram' />
        </Link>
        <Link className={styles.footer__linkbg} href='https://www.facebook.com/Teekkarivisa3/' target='_blank'>
          <Image className={styles.footer__icon} src={require('../../public/face.svg')} alt='facebook' />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
