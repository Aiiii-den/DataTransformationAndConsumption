const { gql } = require('apollo-server');

// everything in between `` is graphQL code, module.export is the return of the file
module.exports=gql` 
    #Schemata für die Digimons -> name, img & level kommen aus der DigimonAPI, cards aus der CardsAPI
    type Digimon {
        name: String!
        img: String!
        level: String!
        cards: [Cards]
    },

    #Schemata für die Cards der spezifischen Digimon -> alles aus der CardsAPI
    type Cards {
        cardnumber: ID!
        name: String!
        color: String #enum possible too
        level: Int
        digi_type: String
        attribute: String
        image_url: String
        play_cost: Int
        evolution_cost: Int
    },

    #Schemata für die favorisierten Digimons aus der DB
    type Favorite {
        username: String!,
        cardname: String!,
    },

    type Query {
        allDigimon: [Digimon] 
        #returns name, img & level aller Digimon der Serie -> Datenabfrage der DigimonAPI

        digimonByName(name: String): [Digimon]
        #returns ein Digimon gesucht nach Namen -> Datenabfrage der DigimonAPI
        
        digimonByLevel(level: String): [Digimon]
        #returns Digimon eines bestimmten levels -> Datenabfrage der DigimonAPI
        
        allCards: [Cards!] 
        #returns cardnumber & name aller Cards -> Datenabfrage der CardsAPI 
        
        cardsByName(name: String): [Cards!] 
        #returns alle type Cards Attribute eines spezifischen Digimons (Abfrage mit name) -> Datenabfrage der CardsAPI 
        
        completeDigimonByName(name: String): [Digimon]
        #returns alle Digimon (incl cards) Attribut für ein spezifisches Digimon -> Vereinigung beider REST API Rückgaben
        #return all Favorites
        getAllFavorites: [Favorite]
        #delete favorite by adding id
        deleteFavoriteById(_id: ID!): Payload!
        #return favorite by adding username
        getFavoriteByUsername(username: String): Payload!
        #delete favorite by adding username
        deleteFavotiteByUsername(username: String): Payload!
        
    },
    
    type Mutation {
        #add new favorite
        addFavorite(username: String, cardname: String): Payload!,
        #aktuellisieren favorite by adding username
        updateFavoriteByUsername(username: String!, cardname: String!): Payload!
    },

    union Payload = Favorite |  InputCannotBeNull | UserAlreadyExists | UserNotFound | IDNotFound
    
    interface Error{
        message:String!
    },
    #Favorite error code.
    type InputCannotBeNull implements Error{
        message: String!
    },
    type UserAlreadyExists implements Error{
        message: String!
    },
    type UserNotFound implements Error{
        message: String!
    },
    type IDNotFound implements Error{
        message: String!
    },
`
