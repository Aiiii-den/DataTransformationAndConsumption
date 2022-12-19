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

  /*
  async altAllDigimon(){
    const response = await this.get(``);
    let arr = Array.isArray(response)
        ? response.map(name => this.altReducer(name))
        : [];

    return JSON.stringify(arr);
  }*/

  altDigimonByName(name){
    const response = this.get(``); //returns an array of all Digimon
    //durch JSON durchloopen und nach name Wert filtern und in neuem JSON Array abspeichern
    /*let DigimonByName = response.filter ( (value) => {
      if(value.name === name)
      {
        return value;
      }
    });*/
    return response.filter((response) => response.name === name);
  }

  /*
    HOW TO ACCESS AN /THE VALUE OF ELEMENT INSIDE AN ARRAY WHICH IS INSIDE A JSON WHICH IN TURN
    IS IN ANOTHER JSON??????
   */


  async altDigimonByLevel(level){
    const response = await this.get(``);

    //JSON.parse(data).data.filter(...)
    //durch JSON durchloopen und nach level Wert filtern und in neuem JSON Array abspeichern
    let DigimonByName = JSON.parse(response).response.filter ( (value) => {
      if(value.data.level == level)
      {
        return value;
      }
    });
  }

  async altReducer(Digimon){
    return {
      name: Digimon.name,
      img: Digimon.img,
      level: Digimon.level,
    };
  }

  searchElem(DigiArr, elem, para ){
    //loop through JSON Array and filter based on input value, if value = true, save in new JSON Array
    //and return the array after the loop
    let Digimon = DigiArr.filter ( (value) => {
      if(value.elem.equals(para))
      {
        return value;
      }
    });

    return null;
  }


}

module.exports=DigimonAPI;