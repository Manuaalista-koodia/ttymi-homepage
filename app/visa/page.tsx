import React from 'react';
import Image from 'next/image';
import styles from './Visa.module.scss';
import { SeasonType, StatsType } from '@/types';

const getSeasons = async () => {
  try {
    console.log('getting stats...');
    const res = await fetch('https://ttymi-homepage.pockethost.io/api/collections/quiz_stats/records', {
      cache: 'no-store',
    });
    const data = await res.json();
    return data?.items as SeasonType[];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const VisaPage = async () => {
  const seasons = await getSeasons();
  console.log(seasons);

  return (
    <div className={styles.visa}>
      <Image className={styles.backgroundImg} src={require('../../public/visa-wide.jpg')} alt='background-image' />

      <div className={styles.visa__landing}>
        <h1 className={styles.visa__title}>TEEKKARIVISA</h1>
      </div>

      <div className={styles.visa__container}>
        <div className={styles.visa__box}>
          <div className={styles.visa__content}>
            <div className={styles.visa__info}>
              {/* seasons.map((s, i) => {
                return <div key={i}>{s.season}</div>;
              }) */}
              <p>{seasons[0].season}</p>
              {seasons[0].stats.map((stats, i) => {
                return (
                  <div key={i}>
                    <p>{stats.Joukkue}</p>
                    <p>{stats.Kokonaispisteet}p</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPage;
