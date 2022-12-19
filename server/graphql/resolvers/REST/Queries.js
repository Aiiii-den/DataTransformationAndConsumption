const resolvers={
    Query: {

        allDigimon: (_ , __, {dataSources}) => {
            return dataSources.digimonAPI.getAllDigimon();
        },

        digimonByName: (_, {name}, {dataSources}) => { 
            return dataSources.digimonAPI.getDigimonByName(name);
        },

        digimonByName2: (_, {name}, {dataSources}) => {
            return dataSources.digimonAPI.altDigimonByName(name);
        },

        allCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAllCards();
        },

        cardsByName : (_, {name}, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(name);
        },

        digimonByLevel: (_, {level}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByLevel(level);
        },

        testConjureName: (_, {name}, {dataSources}) => {
            let digi = dataSources.digimonAPI.getDigimonByName(name); //die Methode funktioniert aus irgendeinem Grund nicht
            let digiCards = dataSources.cardsAPI.getCardsByName(name);

            digi = {... digi, cards: digiCards};
            return digi;
        },

        testConjureName2: (_, {name}, {dataSources}) => {
            let digi = dataSources.digimonAPI.altDigimonByName(name);
            //let digiCards = dataSources.cardsAPI.getCardsByName(name);

            //digi = {... digi, cards: digiCards};
            return digi;
        },

        testConjureAll: (_, __, {dataSources}) => {
            let digi = dataSources.digimonAPI.getAllDigimon();
            //digi=JSON.parse(digi);
            for (let i in digi){

                /*for(let i = 0; i < digi.length; i++) {
                let digiName = digi[i];
                digiName=digiName.name;
            }*/

                /*
                let diginame=digi.at(i).name;
                let digiCards = dataSources.cardsAPI.getCardsByName(diginame);
                digi[i] = {... digi.at(i), cards: digiCards}; */

                //Get the value of the name attribute of the digi JSON at index i
                let digiName=digi[i].name;

                //Consume the digimonAPI with the name of the Digimon at index i
                let digiCards = dataSources.cardsAPI.getCardsByName(digiName);

                // Change the value of the cards attribute at index i
                digi[i].cards = digiCards;
            }

            return digi;
        },

    },
}

module.exports=resolvers;