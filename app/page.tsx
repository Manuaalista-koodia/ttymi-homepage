import Image from 'next/image';
import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.landingInfo}>
        <div className={styles.landingInfo__title}>
          <h1 className={styles.landingInfo__title__ttymi}>TTYMI</h1>
          <h1 className={styles.landingInfo__title__ry}>ry</h1>
        </div>
        <div className={styles.landingInfo__subtitle}>
          <p>
            Tampereen Tonnikalan Ystävät Maistelemassa Istualtaan on Tampereella toimiva opiskelijakerho. Manuaalista
            menoa jo vuodesta 2015!
          </p>
        </div>

        <button>JÄSENEKSI?</button>
      </div>

      <Image className={styles.image} src={require('../public/kyssäri.png')} alt='question-mark' />
    </div>
  );
};

export default HomePage;
