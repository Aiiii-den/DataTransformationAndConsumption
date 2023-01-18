const resolvers= {
    Query: {

        //ACCESS DIGIMONAPI
        allDigimon: (_, __, {dataSources}) => {
            console.log((dataSources.digimonAPI.getAllDigimon()))
            return dataSources.digimonAPI.getAllDigimon()
                /*.then(digimons => {
                    console.log(digimons[0]);
                    // If the request is successful, fulfill the promise with the data
                    return digimons;
                })
                .catch(error => {
                    // If there is an error, reject the promise with the error
                    throw error;
                });*/
        },

        digimonByName: (_, {name}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByName(name)
                .then(digimon => {
                    console.log(digimon);
                    // If the request is successful, fulfill the promise with the data
                    return digimon;
                })
                .catch(error => {
                    // If there is an error, reject the promise with the error
                    throw error;
                });
        },

        digimonByLevel: (_, {level}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByLevel(level)
                .then(digimons => {
                    console.log(digimons);
                    // If the request is successful, fulfill the promise with the data
                    return digimons;
                })
                .catch(error => {
                    // If there is an error, reject the promise with the error
                    throw error;
                });
        },


        //ACCESS CARDSAPI
        allCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAllCards()
                .then(cards => {
                    console.log(cards);
                    // If the request is successful, fulfill the promise with the data
                    return cards;
                })
                .catch(error => {
                    // If there is an error, reject the promise with the error
                    throw error;
                });

        },

        cardsByName: (_, {name}, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(name)
               .then(cards => {
                    console.log(cards);
                    // If the request is successful, fulfill the promise with the data
                    return cards; //STILL NEED TO CREATE A NEW ARRAY SO THAT THE CLIENT CAN ACCESS IT 2.0
                })
                .catch(error => {
                    // If there is an error, reject the promise with the error
                    throw error;
                });
        },


        //COMBINE RESULTS OF BOTH APIs
        testConjureName: (_, {name}, {dataSources}) => {

            return dataSources.digimonAPI.getDigimonByName(name)
                .then(digimon => {

                    function returnDigiCards(name) {
                        return dataSources.cardsAPI.getCardsByName(name)
                            .then(cards => {
                                // If the request is successful, fulfill the promise with the data
                                return cards; //still need to get this away from pending - can wait for a later day tho
                            })
                            .catch(error => {
                                // If there is an error, reject the promise with the error
                                throw error;
                            });
                    }/*
                    let digiCards = dataSources.cardsAPI.getCardsByName(name)
                        .then(cards => {
                            // If the request is successful, fulfill the promise with the data
                            return cards; //still need to get this away from pending - can wait for a later day tho
                        })
                        .catch(error => {
                            // If there is an error, reject the promise with the error
                            throw error;
                        });*/

                    // If the request is successful, fulfill the promise with the data

                    digimon[0].cards = returnDigiCards(name);
                    console.log("1",digimon[0])
                    return  digimon //arr1 //digimon[0];
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