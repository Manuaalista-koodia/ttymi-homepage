'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <Link href='/'>
        <Image className={styles.navbar__logo} src={require('../public/logo-white.png')} alt='logo' />
      </Link>
      <>
        {width > 768 ? (
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
        ) : (
          <div>
            <Image
              className={styles.navbar__icon}
              src={require('../public/menu-button.png')}
              alt='menu-button'
              onClick={() => openMenu()}
            />
            {
              <div
                className={
                  !menuOpen ? `${styles.links__mobile}` : `${styles.links__mobile} ${styles.links__mobile__active}`
                }
              >
                <Link className={styles.links__link} href='/about' onClick={() => setMenuOpen(false)}>
                  <p className={styles.links__mobile__text}>TIETOA</p>
                </Link>
                <Link className={styles.links__link} href='/events' onClick={() => setMenuOpen(false)}>
                  <p className={styles.links__mobile__text}>TAPAHTUMAT</p>
                </Link>
                <Link
                  className={styles.links__link}
                  href='https://drive.google.com/file/d/1zLCdRl9WED5RuoAI4pxzqx-bT6y77trI/view'
                  target='_blank'
                  onClick={() => setMenuOpen(false)}
                >
                  <p className={styles.links__mobile__text}>JÄSENEKSI?</p>
                </Link>
                <Link className={styles.links__link} href='/contacts' onClick={() => setMenuOpen(false)}>
                  <p className={styles.links__mobile__text}>YHTEYSTIEDOT</p>
                </Link>
              </div>
            }
          </div>
        )}
      </>
    </nav>
  );
};

export default Navbar;
