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
    }

    type Favorite {
        card: Cards!
        img: String!
        isFav: Boolean
    }

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
        
        testConjureName(name: String): [Digimon]
        #returns alle Digimon (incl cards) Attribut für ein spezifisches Digimon -> Vereinigung beider REST API Rückgaben‚
        
        testConjureAll: [Digimon]
        #returns alle Digimon (incl cards) -> Vereinigung beider REST API Rückgaben
        
        Digimon: [Digimon]
        
    }
    
    type Mutation {
        addFavorite(cardsName: String): Favorite
    }
`
