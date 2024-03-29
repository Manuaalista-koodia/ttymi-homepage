'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './Visa.module.scss';
import { SeasonType, StatsType } from '@/types';

// Some "purkkakoodi" for displayin the stats per quiz
const quizNames = ['eka', 'toka', 'kolmas', 'neljäs', 'viides', 'vika'];

const getSeasons = async () => {
  try {
    console.log('getting visa-stats...');
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
  const [seasons, seasonsSet] = React.useState<SeasonType[] | null>(null);
  const [selectedSeason, setSelectedSeason] = React.useState(0);

  useEffect(() => {
    getSeasons()
      .then((seasons) => {
        seasonsSet(seasons);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSeasonChange = (e: any) => {
    if (seasons === null) return;
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
              {seasons ? (
                <>
                  <div className={styles.heading}>
                    <h1>KAUSI</h1>
                    <select className={styles.select} onChange={(e) => handleSeasonChange(e)}>
                      {seasons.map((season, i) => {
                        return (
                          <option key={i} value={season.season}>
                            {season.season}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className={styles.visa__headings}>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      <p>#</p>
                      <p>Joukkue</p>
                    </div>
                    <p>Pisteet</p>
                  </div>
                  <div className={styles.visa__stats}>
                    {seasons[selectedSeason] !== undefined &&
                      seasons[selectedSeason].stats.map((stats: StatsType, i) => {
                        return (
                          <details className={styles.stat} key={i}>
                            <summary className={styles.stat__container}>
                              <div
                                style={{
                                  display: 'flex',
                                  gap: '2rem',
                                  marginRight: '2rem',
                                }}
                              >
                                <p>{`${i + 1}.`}</p>
                                <p
                                  style={{
                                    overflow: 'break-word',
                                    wordWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    hyphens: 'auto',
                                    whiteSpace: 'pre-wrap',
                                  }}
                                >
                                  {stats.Joukkue}
                                </p>
                              </div>
                              <p>{stats.Kokonaispisteet}p</p>
                            </summary>
                            <div>
                              <hr style={{ width: '100%', opacity: 0.25 }} />
                              {quizNames.map((quizName, i) => {
                                if (stats[quizName] === undefined || stats[quizName] === '' || stats[quizName] === '-')
                                  return null;
                                return (
                                  <div key={i} style={{ marginLeft: '3rem' }}>
                                    <p>{`${seasons[selectedSeason].season_prefix} ${quizName}: ${stats[quizName]}p`}</p>
                                  </div>
                                );
                              })}
                            </div>
                          </details>
                        );
                      })}
                  </div>
                </>
              ) : (
                <div className={styles.visa__loading}>
                  <span className={styles.visa__loading__loader}></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaPage;
