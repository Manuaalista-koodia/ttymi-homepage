import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <Image className={styles.navbar__logo} src={require('../public/logo-white.png')} alt='logo' />
      </Link>

      <div className={styles.links}>
        <Link className={styles.links__link} href='/about'>
          TIETOA
        </Link>
        <Link className={styles.links__link} href='/events'>
          TAPAHTUMAT
        </Link>
        <Link
          className={styles.links__link}
          href='https://drive.google.com/file/d/1zLCdRl9WED5RuoAI4pxzqx-bT6y77trI/view'
          target='_blank'
        >
          JÄSENEKSI?
        </Link>
        <Link className={styles.links__link} href='/contacts'>
          YHTEYSTIEDOT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
