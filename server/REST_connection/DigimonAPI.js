const { RESTDataSource } = require('@apollo/datasource-rest');

class DigimonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimon-api.vercel.app/api/digimon/';
  }

  /*
  async getAllDigimon() {
    let response = new Promise(this.get(``));
    response.then((value) => {
      return value;
    }
    );
    // do something with the data here
    //turn the promise into an Array data type
   // return data
  }*/
  getAllDigimon(){
    return this.get(``);
  }

  getDigimonByName(name) {
    //console.log(this.get(`name/${name}`));
    let digi = this.get(`name/${name}`);
    digi.resolve();
    console.log(digi);
    return digi
    //turn the promise into an Array data type
  }

  getDigimonByLevel(level) {
    return this.get(`level/${level}`);
  }

  /*
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
  }
  getDigimonByName3({name}) {
    return Promise.all(
        name.map(name => this.getDigimonByName2(name)),
    );
  }*/
}

module.exports=DigimonAPI;