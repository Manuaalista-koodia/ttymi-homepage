import styles from './Jaseneksi.module.scss';
import Image from 'next/image';

const JaseneksiPage = () => {
  return (
    <div className={styles.jaseneksi}>
      <Image className={styles.backgroundImg} src={require('../../public/green.jpg')} alt='background-image' />
      <div className={styles.jaseneksi__container}>
        <div className={styles.jaseneksi__start}>
          <Image className={styles.jaseneksi__img} src={require('../../public/jaseneksi.jpg')} alt='jaseneksi' />
          <div className={styles.jaseneksi__start__text}>
            <h1 className={styles.jaseneksi__title}>JÄSENEKSI?</h1>
            <p className={styles.jaseneksi__text}>
              Haluaisitko sinä päästä tekemään visoja ja muita tapahtumia hyvällä porukalla? Jos vastaus on kyllä, voit
              hakea kerhomme jäsenyyttä hakulomakkeen kautta! Hakulomakkeen ja jäsenkriteerimme löydät alta. Valitsemme
              uusia jäseniä 1-3 kertaa vuodessa 1-4 henkilöä kerrallaan.
            </p>
          </div>
        </div>

        <div className={styles.jaseneksi__content}>
          <h3 className={styles.jaseneksi__subtitle}>Jäsenkriteerit:</h3>
          <ul className={styles.jaseneksi__list}>
            <li className={styles.jaseneksi__text}>
              Olet vähintään 2. vuoden opiskelija Tamperelaisessa korkeakoulussa
            </li>
            <li className={styles.jaseneksi__text}>Sinulla on sujuvat suomen kielen taidot</li>
            <li className={styles.jaseneksi__text}>
              Olet kiinnostunut opiskelijakulttuurin kehittämisestä ja tykkäät tehdä asioita pilke silmäkulmassa
            </li>
            <li className={styles.jaseneksi__text}>Pystyt sitoutumaan kerhon toimintaan useamman vuoden ajaksi</li>
          </ul>

          <h3 className={styles.jaseneksi__subtitle}>Tämän lisäksi seuraavia asioita voidaan katsoa eduksi:</h3>
          <ul className={styles.jaseneksi__list}>
            <li className={styles.jaseneksi__text}>Kokemus tapahtumien järjestämisestä</li>
            <li className={styles.jaseneksi__text}>Graafinen ja muu visuaalinen osaaminen</li>
            <li className={styles.jaseneksi__text}>Olet kiinnostunut esiintymisestä</li>
          </ul>

          <h3 className={styles.jaseneksi__subtitle}>Hakulomake (auki 24/7/365)</h3>
          <p className={styles.jaseneksi__text}>
            Voit jättää hakemuksen tämän lomakkeen kautta (vaatii kirjautumisen Google-tilillä):
            <br />
            <a className={styles.jaseneksi__link} href='https://forms.gle/RNkW7JZ2goMBxRLJ8' target='_blank'>
              https://forms.gle/RNkW7JZ2goMBxRLJ8
            </a>
          </p>

          <h3 className={styles.jaseneksi__subtitle}>Lisätietoa</h3>
          <p className={styles.jaseneksi__text}>
            Haluatko lisätietoa toiminnastamme tai jäikö jokin mietityttämään? Voit kysyä lisätietoa Telegramissa
            laittamalla viestiä @Mihef tai laittamalla mailia ttymi@lists.tuni.fi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JaseneksiPage;
