const { RESTDataSource } = require('@apollo/datasource-rest');

class CardsAPI extends RESTDataSource {

  constructor() {
    super();
    this.baseURL = 'https://digimoncard.io/api-public/';
  }

  getAllCards() {
    return this.get(`getAllCards.php?sort=name&series=Digimon Card Game&sortdirection=asc`);
  }

  getCardsByName(name) {
      return this.get(`search.php?n=${name}`);
  }

}

module.exports=CardsAPI;