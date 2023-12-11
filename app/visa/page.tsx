'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './Visa.module.scss';
import { SeasonType, StatsType } from '@/types';

const getSeasons = async () => {
  try {
    console.log('getting stats...');
    const res = await fetch(
      'https://ttymi-homepage.pockethost.io/api/collections/quiz_stats/records?sort=-season_start_date',
      {
        cache: 'no-store',
      },
    );
    const data = await res.json();
    return data?.items as SeasonType[];
  } catch (e) {
    console.log(e);
    return [];
  }
};

const VisaPage = () => {
  const [seasons, seasonsSet] = React.useState<SeasonType[]>([]); // [[], setSeasons]
  const [selectedSeason, setSelectedSeason] = React.useState(0); // [0, setSeason]

  useEffect(() => {
    getSeasons().then((seasons) => {
      //selectedSeasonSet(seasons.length - 1);
      seasonsSet(seasons);
    });
  }, []);

  const handleSeasonChange = (e: any) => {
    setSelectedSeason(seasons.findIndex((season) => season.season === e.target.value));
  };

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
              {seasons.length && (
                <>
                  <select onChange={(e) => handleSeasonChange(e)}>
                    {seasons.map((season, i) => {
                      return (
                        <option key={i} value={season.season}>
                          {season.season}
                        </option>
                      );
                    })}
                  </select>
                  <div className={styles.visa__stats}>
                    {seasons[selectedSeason] !== undefined &&
                      seasons[selectedSeason].stats.map((stats: StatsType, i) => {
                        return (
                          <details className={styles.stat} key={i}>
                            <summary className={styles.stat__container}>
                              <p>{stats.Joukkue}</p>
                              <p>{stats.Kokonaispisteet}p</p>
                            </summary>
                            <p>syksyn eka</p>
                            <p>syksyn toka</p>
                          </details>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPage;
