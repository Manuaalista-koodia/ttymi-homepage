'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
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
    <div className='bg-ttymi-gradient overflow-x-hidden m-0 min-h-[78vh]'>
      <Image
        className='absolute left-0 -top-40 w-full h-auto z-[1] object-cover max-[1300px]:-top-8 max-[768px]:top-8'
        src='/visa-wide.jpg'
        alt='background-image'
        fill
      />

      <div className='relative z-[5] my-[14rem] mx-[10rem] w-[45rem] max-[1300px]:my-[12rem] max-[1300px]:mx-[5rem] max-[1300px]:w-[35rem] max-[768px]:my-[8rem] max-[768px]:mx-[2rem] max-[768px]:w-[25rem] max-[540px]:my-[5rem] max-[540px]:mx-[1rem] max-[540px]:w-[20rem]'>
        <h1 className='text-[#fdfdfd] text-[4rem] font-semibold tracking-[0.1rem] drop-shadow-[2px_2px_5px_rgba(0,0,0,1)] max-[1300px]:text-[3rem] max-[768px]:text-[2rem]'>
          TEEKKARIVISA
        </h1>
      </div>

      <div className='flex flex-col items-center'>
        <div className='bg-white text-black rounded-t-[2rem] p-12 w-4/5 max-sm:w-[95%] max-sm:p-4 max-md:p-8 relative z-10 overflow-x-hidden md:p-[3rem_6rem]'>
          <div className='min-h-[40vh]'>
            <div className='flex flex-col'>
              {seasons ? (
                <>
                  <div className='flex flex-row items-center gap-4 mb-4'>
                    <h1 className='text-xl font-bold'>KAUSI</h1>
                    <select
                      className='bg-[#0a7a2f] text-white text-base cursor-pointer p-3 rounded-md ml-2'
                      onChange={(e) => handleSeasonChange(e)}
                    >
                      {seasons.map((season, i) => {
                        return (
                          <option key={i} value={season.season}>
                            {season.season}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className='flex flex-row justify-between items-center px-[2.15rem] uppercase font-bold max-[1300px]:pr-2 mb-4'>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                      <p>#</p>
                      <p>Joukkue</p>
                    </div>
                    <p>Pisteet</p>
                  </div>
                  <div className='flex flex-col gap-4'>
                    {seasons[selectedSeason] !== undefined &&
                      seasons[selectedSeason].stats.map((stats: StatsType, i) => {
                        return (
                          <details
                            className='w-[93%] cursor-pointer bg-[#e6e6e6] p-[1rem_2.5rem] rounded-2xl max-[768px]:w-[85%] max-[450px]:w-full max-sm:p-4'
                            key={i}
                          >
                            <summary className='flex flex-row justify-between w-full font-bold'>
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
                <div className='flex flex-col items-center justify-center gap-4 min-h-[40vh]'>
                  <span className='w-12 h-12 border-[5px] border-[#0a7a2f] border-b-transparent rounded-full inline-block box-border animate-spin'></span>
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
