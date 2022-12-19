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

  getDigimonByLevel(level){
    return this.get(`level/${level}`);
  }

  /*
  async altAllDigimon(){
    const response = await this.get(``);
    let arr = Array.isArray(response)
        ? response.map(name => this.altReducer(name))
        : [];

    return JSON.stringify(arr);
  }*/

  async altDigimonByName(name){
    const response = await this.get(``, { name: name });
    //return JSON.stringify(this.altReducer(response[0]));
    //return this.altReducer(response[0]);
    return response[0];
  }

  async altDigimonByLevel(level){
    const response = await this.get(``, { level: level });
    /*let arr = Array.isArray(response)
        ? response.map(digimon => this.altReducer(digimon))
        : [];*/

    return response;
  }

  async altReducer(Digimon){
    return {
      name: Digimon.name,
      img: Digimon.img,
      level: Digimon.level,
    };
  }

}

module.exports=DigimonAPI;