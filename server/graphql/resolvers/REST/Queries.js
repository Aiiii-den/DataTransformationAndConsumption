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

        test1: (_, { name}, {dataSources}) => {
            let digi = dataSources.digimonAPI.getDigimonByName(name);
            let digiCards = dataSources.cardsAPI.getCardsByName(name);

            digi = {... digi, cards: digiCards};
            return digi;
        },

        test2: (_, __, {dataSources}) => {
            let digi = dataSources.digimonAPI.getAllDigimon();
            //digi=JSON.parse(digi);
            for (let i=0; i< Object.keys(digi).length; i++){

                let diginame=digi.at(i).name;
                let digiCards = dataSources.cardsAPI.getCardsByName(diginame);
                digi[i] = {... digi.at(i), cards: digiCards};
            }

            return digi;
        },

    },
}

module.exports=resolvers;