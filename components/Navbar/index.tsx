'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

const Links = ({
  isMobile,
  menuOpen,
  setMenuOpen,
}: {
  isMobile: boolean;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={
        isMobile
          ? !menuOpen
            ? `${styles.links__mobile}`
            : `${styles.links__mobile} ${styles.links__mobile__active}`
          : styles.links
      }
    >
      <Link className={styles.links__link} href='/about' onClick={() => isMobile && setMenuOpen(false)}>
        <p className={isMobile ? styles.links__mobile__text : ''}>TIETOA</p>
      </Link>
      <Link className={styles.links__link} href='/events' onClick={() => isMobile && setMenuOpen(false)}>
        <p className={isMobile ? styles.links__mobile__text : ''}>TAPAHTUMAT</p>
      </Link>
      <Link className={styles.links__link} href='/visa' onClick={() => isMobile && setMenuOpen(false)}>
        <p className={isMobile ? styles.links__mobile__text : ''}>TEEKKARIVISA</p>
      </Link>
      <Link className={styles.links__link} href='/jaseneksi' onClick={() => isMobile && setMenuOpen(false)}>
        <p className={isMobile ? styles.links__mobile__text : ''}>JÄSENEKSI?</p>
      </Link>

      <Link
        className={styles.links__link}
        href='http://uno.ttymi.fi/'
        target='_blank'
        onClick={() => isMobile && setMenuOpen(false)}
      >
        <p className={isMobile ? styles.links__mobile__text : ''}>UNO</p>
      </Link>

      <Link className={styles.links__link} href='/contacts' onClick={() => isMobile && setMenuOpen(false)}>
        <p className={isMobile ? styles.links__mobile__text : ''}>YHTEYSTIEDOT</p>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener('resize', () => {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <Image className={styles.navbar__logo} src={require('../../public/logo-white.png')} alt='logo' />
      </Link>
      <>
        {!isMobile ? (
          <Links isMobile={false} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        ) : (
          <div>
            <Image
              className={menuOpen ? styles.navbar__icon__close : styles.navbar__icon__open}
              src={menuOpen ? require('../../public/close.png') : require('../../public/menu-button.png')}
              alt='menu-button'
              onClick={() => openMenu()}
            />
            {<Links isMobile={true} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
