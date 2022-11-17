const { RESTDataSource } = require('@apollo/datasource-rest');

class DigimonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimon-api.vercel.app/api/digimon';
  }

  getAllDigimon() {
    return this.get(`/`);
  }
  /*
  getAllNames(){
    return this.get('name');
  }*/ //Alter Code

  getDigimonFromName(name){
    return this.get(`name/${name}`);
  }

  /*async getDigimon(name){
    return this.get(`name/${name}`);
  }*/ //Alter Code
}

module.exports=DigimonAPI;