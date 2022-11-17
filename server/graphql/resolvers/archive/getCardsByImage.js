/*const { ApolloError } = require("apollo-server"); //something is not right in the variable!!

module.exports = {
    Query: {
        getNameFromImage(_, { $imageURL }) {
            //return name
            return {
                name: MongoDB //get request to MongoDB with imageURL as search input
            }
        },
        getCardsFromName(_, { $name }){
            //return [Cards] Object
            
            [Cards]: get request for all lines with name==name
            
            return {
                [Cards]: DigimonCards //get request for all the cards with the name as search input
            }
        },
        getCardsByImage(_, { $imageURL }){
            var nm = this.getNameFromImage(_, { $imageURL });
            //return getCardsFromName(_, { nm })
            return {
                [Cards]: getCardsFromName(_, { nm }),
            }
            //return getCardsFromName(_, {(getNameFromImage(_, { imageURL }))})
        }


        /*
        getCardsByImage(_, { imageURL }){
            //connect to RESTAPI functions here
            /* 
            den Namen des Digimon zum Bild zuordnen und dann mit dem Namen in der CardsAPI suchen
            return 

            //
            name: String! {
                cards: [Cards!] {
                    name
                    color
                    stage
                    attribute
                }
            }
            

    }
}*/
