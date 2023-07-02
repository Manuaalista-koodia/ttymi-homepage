'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './About.module.scss';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image className={styles.embla__img} src={require('../../public/IMG_1558.jpg')} alt='1' />
        </div>
        <div className={styles.embla__slide}>
          <Image className={styles.embla__img} src={require('../../public/IMG_6150.jpg')} alt='1' />
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className={styles.about}>
      <Carousel />
      <div className={styles.about__landing}>
        <h1 className={styles.about__title}>MANUAALISTA MENOA JO VUODESTA 2015!</h1>
      </div>

      <div className={styles.about__container}>
        <div className={styles.about__box}>
          <div className={styles.about__content}>
            <div className={styles.about__info}>
              <h1 className={styles.about__content__title}>MIKÄ IHMEEN TTYMI?</h1>
              <p className={styles.about__content__text}>
                TTYMI ry on Hervannasta lähtöinen opiskelijakerho. TTYMI on mukana tekemässä Tamperelaista opiskelija
                yhteisöä mm. järjestämällä erilaisia tapahtumia. Ydintoimintaamme onkin kaikille avoimien Teekkarivisan
                järjestäminen. TTYMI osallistuu ahkerasti myös ylioppilaskunnan ja teekkariyhdistyksen tapahtumiin,
                kuten erilaisiin rastikierroksiin ja tietenkin Wappuun! Teemme toimintaamme rennolla otteella ja pilke
                silmäkulmassa. Jäsenemme voit tunnistaa vihreistä liiveistä ja manuaalisesta menosta.
              </p>
              <p className={styles.about__content__text}>Voit seurata toimintaamme parhaiten Instagramista!</p>
            </div>
            <Image className={styles.about__content__imgRight} src={require('../../public/patch.jpg')} alt='logo' />
          </div>

          <div className={styles.about__content__second}>
            <div className={styles.about__info}>
              <h1 className={styles.about__content__title}>TEEKKARIVISA</h1>
              <p className={styles.about__content__text}>
                Teekkarivisa on TTYMIn perinteinen noin periodeittain järjestettävät pubivisa/tietokilpailu
                Teekkari-twistillä! Teekkarivisaan voi osallistua yksin tai parhaan kokemuksen takaamiseksi 3-5 henkilön
                joukkueella. Teekkarivisaan osallistuminen on ilmaista ja kaikille avointa.
              </p>
              <p className={styles.about__content__text}>Teekkarivisojen ajankohdista tiedotetaan TTYMIn someissa.</p>
            </div>
            <Image className={styles.about__content__imgLeft} src={require('../../public/visa.png')} alt='visa' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
