export type Digimon = {
  name;
  img;
  level;
}

export type Cards = {
  cardnumber;
  name;
  color;
  level;
  digi_type;
  attribute;
  image_url;
  play_cost;
  evolution_cost;

}

export type Query = {
  allDigimon: Digimon[];
  alleCards: Cards[];
}
