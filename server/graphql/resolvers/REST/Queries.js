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
    //fehlerhafte code .. funktioniert noch nicht
    // testConjureAll: (_, __, {dataSources}) => { //Hilfe von Herr Freiheit im Januar?
    //     let digi = dataSources.digimonAPI.getAllDigimon();

    //     //digi=JSON.parse(digi);
    //     //for (let i in digi){

    //     for(let i = 0; i < digi.length; i++) {
    //         //let digiName = digi[i];
    //         //digiName=digiName.name;

    //         let digiName = digi.indexOf(i).name;
    //         let digiCards = dataSources.cardsAPI.getCardsByName(digiName);
    //         digi.indexOf(i).cards = digiCards;
    //     }

    //         /*
    //         let diginame=digi.at(i).name;
    //         let digiCards = dataSources.cardsAPI.getCardsByName(diginame);
    //         digi[i] = {... digi.at(i), cards: digiCards};

    //         //Get the value of the name attribute of the digi JSON array at index i
    //         //let digiName=digi[i].name;

    //         //Consume the digimonAPI with the name of the Digimon at index i
    //         //let digiCards = dataSources.cardsAPI.getCardsByName(digiName);

    //         // Change the value of the cards attribute at index i
    //         //digi[i].cards = digiCards;

    //     return digi;
    // },//doesn't work properly*/
    // },

}
module.exports=resolvers;