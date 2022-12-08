const { RESTDataSource } = require('@apollo/datasource-rest');
//const { Digimon } = require('../graphql/resolvers/index');

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
}

module.exports=DigimonAPI;