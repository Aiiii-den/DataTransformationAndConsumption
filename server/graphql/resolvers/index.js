const resolvers = require('./REST/Digimon');
const resolvers2 = require('./REST/Cards');


module.exports={
    Query: {
        ...resolvers.Query, 
        //...resolvers.Digimon, ALTER KOMMENTAR
        ...resolvers2.Query,
        //...resolvers2.Cards, ALTER KOMMENTAR
    },

}

/*
MongoDB idea: use card IDs as primary "key" and CardsAPI as baselayer
                    -> first saved in Database
                    -> ?only fetch for Cards with type Digimon?

              fetch data from DigimonAPI and add imgURL based on the name of the card
                    -> delete all the empty rows
                    -> use DB as base layer for graphQL requests
*/ //ALTER KOMMENTAR / BRAINSTORMING