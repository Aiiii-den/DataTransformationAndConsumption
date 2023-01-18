export type Cards = {
  ID: number;
  name: string;
  color: string;
  level: number;
  digi_type: string;
  attribute: string;
  image_url: string;
  play_cost: number;
  evolution_cost: number;
}

export type Query = {
  allCards: Cards[];
}
