const { RESTDataSource } = require('@apollo/datasource-rest');
var XMLHttpRequest = require('xhr2');

class DigimonAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimon-api.vercel.app/api/digimon/';
  }

  async getAllDigimon() {
    return this.get(``)
        .then(digimons => {
          console.log(digimons);
          // If the request is successful, fulfill the promise with the data
          return digimons;
        })
        .catch(error => {
          // If there is an error, reject the promise with the error
          throw error;
        });

  }

  getDigimonByName(name) {
  return this.get(`name/${name}`)
      .then(digimon => {
        console.log(digimon);
        // If the request is successful, fulfill the promise with the data
        return digimon;
      })
      .catch(error => {
        // If there is an error, reject the promise with the error
        throw error;
      });
  }

  getDigimonByLevel(level) {
    //return this.get(`level/${level}`);
    return this.get(`level/${level}`)
        .then(digimons => {
          console.log(digimons);
          // If the request is successful, fulfill the promise with the data
          return digimons;
        })
        .catch(error => {
          // If there is an error, reject the promise with the error
          throw error;
        });
  }

}

module.exports=DigimonAPI;