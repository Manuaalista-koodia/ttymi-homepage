export type EventType = {
  id: string;
  title: string;
  content: string;
  image: any;
  datetime: string;
};

export type StatsType = {
  Joukkue: string;
  Kokonaispisteet: number;
};

export type SeasonType = {
  id: string;
  season: string;
  stats: StatsType[];
  season_start_date: string;
};
