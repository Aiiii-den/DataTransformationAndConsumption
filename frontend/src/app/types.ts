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

export type DigimonByName1 = {
  name;
  img;
  level;
  cards: Cards[];
}

export type Query = {
  digimonByName2: DigimonByName1[];
  allDigimon: Digimon[];
  alleCards: Cards[];
}
