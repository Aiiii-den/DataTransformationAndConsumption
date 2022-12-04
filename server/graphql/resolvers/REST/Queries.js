const resolvers={
    Query: {

        allDigimon: (_ , __, {dataSources}) => {
            return dataSources.digimonAPI.getAllDigimon();
        },

        digimonByName: (_, {name}, {dataSources}) => { 
            return dataSources.digimonAPI.getDigimonByName(name);
        },

        allCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAllCards();
        },

        cardsByName : (_, {name}, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(name);
        },
    },
}

module.exports=resolvers;