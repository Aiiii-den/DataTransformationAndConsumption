const { RESTDataSource } = require('@apollo/datasource-rest');

class DigimonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimon-api.vercel.app/api/digimon/';
  }

  async getAllDigimon() {
    let response = await this.get(``)
    response = response.json();
    return [response];
    //turn the promise into an Array data type
  }

  getDigimonByName(name) {
    return this.get(`name/${name}`);
    //turn the promise into an Array data type
  }

  getDigimonByLevel(level) {
    return this.get(`level/${level}`);
  }


  //COPY PASTE FROM https://www.apollographql.com/tutorials/fullstack-quickstart/connecting-to-data-sources
  async getAllDigimon2() {
    const response = await this.get('');
    return Array.isArray(response)
        ? response.map(digimon => this.digimonReducer(digimon))
        : [];
  }

  digimonReducer(digimon) {
    return {
      name: digimon.name,
      img: digimon.img,
      level: digimon.level,
    };
  }

  async getDigimonByName2({name}) {
    const response = await this.get('', {name: name});
    return this.digimonReducer(response[0]);
  }/*
    return Array.isArray(response)
        ? response.map(digimon => this.digimonReducer(digimon))
        : [];
  }*/
  getDigimonByName3({name}) {
    return Promise.all(
        name.map(name => this.getDigimonByName2(name)),
    );
  }
}

module.exports=DigimonAPI;