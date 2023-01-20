export type Digimon = {
  name;
  img;
  level;
}

export type DigimonByName = {
  name;
}

export type Query = {
  digimonByName: DigimonByName[];
  allDigimon: Digimon[];
}
