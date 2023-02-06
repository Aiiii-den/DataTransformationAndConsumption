const resolvers= {
    Query: {

        //returns alle Digimon (ohne "cards" Attribut) der DigimonAPI
        allDigimon: (_, __, {dataSources}) => {
            return dataSources.digimonAPI.getAllDigimon()
        },

        //returns ein spezifisches Digimon (ohne "cards" Attribut) der DigimonAPI - Suchkriterium = Name
        digimonByName: (_, {name}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByName(name);
        },

        //returns alle Digimon (ohne "cards" Attribut) eines Levels der DigimonAPI - Suchkriterium = Level
        digimonByLevel: (_, {level}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByLevel(level);
        },

        //returns alle Cards (nur "cardnumber" &  "name" Attribute) der CardsAPI
        allCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAllCards();
        },

        //return alle Cards mit einem bestimmten Namen der CardsAPI - Suchkriterium = Name
        cardsByName: (_, {name}, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(name);
        },

        /*
        resolves das promise der DigimonAPi und fügt alle Cards mit einem bestimmten Namen
        der CardsAPI als neues Attribut zum digimon Objekt hinzu
        Suchkriterium Digimon = Name & Suchkriterium Cards = Name
         */
        completeDigimonByName: (_, {name}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByName(name)
                .then(digimon => {
                    // If the request is successful, fulfill the promise with the data
                    digimon[0].cards = dataSources.cardsAPI.getCardsByName(name);
                    return  digimon;
                })
                .catch(error => {
                    // If there is an error, reject the promise with the error
                    throw error;
                });
        },
    },
}
module.exports=resolvers;