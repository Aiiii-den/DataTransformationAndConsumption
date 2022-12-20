const { RESTDataSource } = require('@apollo/datasource-rest');

class DigimonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimon-api.vercel.app/api/digimon/';
  }

  getAllDigimon() {
    return this.get(``);
  }

  getDigimonByName(name){
    return this.get(`name/${name}`);
  }

  getDigimonByLevel(level){
    return this.get(`level/${level}`);
  }
}

module.exports=DigimonAPI;