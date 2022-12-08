const resolvers={
    Query: {
        
        allCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAll();
        },
        //returns alle Cards (cardnumber & name) der CardsAPI


        cardsByDigimonName: (_, {name}, {dataSources}) => { 
            return dataSources.cardsAPI.getCardsByName(name);
        }
        //returns EINE spezifische Card der CardsAPI -> name = Input Argument
    },
    
    Cards: {
        cards: ({ allCards }, __, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(allCards.name);
        }
        //ähnliche Abfrage wie in ./Digimon.js :
            //soll den Output der allCards Abfrage/Query nutzen um mit diesem alle spezifischen Cards aller names der Cards abzurufen
            //-> Input = alle names der CardsAPI
            //-> Output: alle spezfisichen Cards (mit allen Cards Attributen (siehe ../typeDefs.js))
    }
}

module.exports=resolvers;