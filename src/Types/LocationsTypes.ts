export type ConnectionsResponse = {
  connections: Connection[];
  from: Checkpoint;
  to: Checkpoint;
  stations: Location[];
};

export type Connection = {
  from: Checkpoint;
  to: Checkpoint;
  duration: string;
  transfers: number;
  service: 'regular' | 'irregular' | null;
  products: string[];
  capacity1st: 1 | null;
  capacity2nd: 2 | null;
  sections: Section[];
};

export type Checkpoint = {
  station: Location;
  arrival: string;
  arrivalTimestamp: number;
  departure: string;
  departureTimestamp: number;
  delay: string;
  platform: string;
  prognosis: Prognosis;
  realtimeAvailability: string | null;
  location: Location;
};

export type Location = {
  id: string;
  type: 'station' | 'poi' | 'address' | 'refine';
  name: string;
  score: string;
  coordinates: Coordinates;
  distance: string;
};

export type Coordinates = {
  type: string;
  x: number;
  y: number;
};

export type Prognosis = {
  platform: string | null;
  arrival: string | null;
  departure: string | null;
  capacity1st: string | null;
  capacity2nd: string | null;
};

export type Section = {
  journey: Journey;
  walk: string | null;
  departure: Checkpoint;
  arrival: Checkpoint;
};

export type Journey = {
  name: string | null;
  category: string;
  subcategory: string | null;
  categoryCode: string | null;
  number: number;
  operator: string;
  to: string;
  passList: Checkpoint[];
  capacity1st: string | null;
  capacity2nd: string | null;
};
