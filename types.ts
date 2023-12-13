import { ReactNode } from 'react';

export type EventType = {
  id: string;
  title: string;
  content: string;
  image: any;
  datetime: string;
};

export type StatsType = {
  [x: string]: ReactNode;
  Joukkue: string;
  Kokonaispisteet: string;
  eka: string;
  toka: string;
  kolmas: string;
  neljäs: string;
  viides: string;
  vika: string;
};

export type SeasonType = {
  id: string;
  season: string;
  stats: StatsType[];
  season_start_date: string;
  season_prefix: string;
};
