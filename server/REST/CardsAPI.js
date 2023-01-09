const { RESTDataSource } = require('@apollo/datasource-rest');

class CardsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://digimoncard.io/api-public/';
  }

  getAllCards() {
    return this.get(`getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc`)
        .then(cards => {
          console.log(cards);
          // If the request is successful, fulfill the promise with the data
          return cards;
        })
        .catch(error => {
          // If there is an error, reject the promise with the error
          throw error;
        });
  }

  getCardsByName(name){
    return this.get(`search.php?n=${name}`)
        .then(cards => {
          console.log(cards);
          // If the request is successful, fulfill the promise with the data
          return cards; //STILL NEED TO CREATE A NEW ARRAY SO THAT THE CLIENT CAN ACCESS IT 2.0
        })
        .catch(error => {
          // If there is an error, reject the promise with the error
          throw error;
        });
  }
}

module.exports=CardsAPI;