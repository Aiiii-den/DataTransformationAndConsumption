const resolvers={
    Query: {
        /*allNames: (_, __, {dataSources}) => {
            return dataSources.digimonAPI.getAllNames();
        }*/
        AllDigimon: (_, __, {dataSources}) => {
            return dataSources.digimonAPI.getAllDigimon();
        },
        /*
        AllCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAll();
        },*/

        CardsByDigimonName: (_, {name}, {dataSources}) => { 
            return dataSources.cardsAPI.getCardsByName(name);
        }
    },
    /*
    Digimon: {
        digimon: ({name}, _, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonFromName(name);
        },
    },*/

    Cards: {
        cards: ({name}, _, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(name);
        }
    }
}

module.exports=resolvers;