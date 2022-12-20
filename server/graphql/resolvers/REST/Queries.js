const resolvers= {
    Query: {

        //ACCESS DIGIMONAPI
        allDigimon: (_, __, {dataSources}) => {
            return dataSources.digimonAPI.getAllDigimon();
        },

        digimonByName: (_, {name}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByName(name);
        },

        digimonByLevel: (_, {level}, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonByLevel(level);
        },


        //ACCESS CARDSAPI
        allCards: (_, __, {dataSources}) => {
            return dataSources.cardsAPI.getAllCards();
        },

        cardsByName: (_, {name}, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(name);
        },

        /*
        //COMBINE RESULTS OF BOTH APIs
        testConjureName: (_, {name}, {dataSources}) => {
            let digi = dataSources.digimonAPI.getDigimonByName(name); // OBJECT TYPE = PROMISE
            digi = digi.toString(); // return [object, .., object]
            //let digiObj = JSON.parse(digi);


            -> for name = "Agumon" digi = [{"name":"Agumon","img":"https://digimon.shadowsmith.com/img/agumon.jpg","level":"Rookie"}]


            //add cards element to JSON object in digi Array and add the digiCards Array as value?
            //how to (access and) add element to JSON inside Array?

            let digiCards = dataSources.cardsAPI.getCardsByName(name);


            /*
            return should look like this:
            [{name: digi.name, img: digi.img, level: digi.level, cards: [digiCards]}]


            //digiObj = digi[0];
            //digiObj.cards = digiCards;

            let arr1 = [{ name: digi.at(20), img: "testimg1", level: "testlevel1", cards: digiCards }, { name: "testname", img: "testimg", level: "testlevel", cards: [] }];

            return arr1;
        }, //doesn't work yet

        testConjureAll: (_, __, {dataSources}) => {
            let digi = dataSources.digimonAPI.getAllDigimon();

            //digi=JSON.parse(digi);
            //for (let i in digi){

            for(let i = 0; i < digi.length; i++) {
                //let digiName = digi[i];
                //digiName=digiName.name;

                let digiName = digi.indexOf(i).name;
                let digiCards = dataSources.cardsAPI.getCardsByName(digiName);
                digi.indexOf(i).cards = digiCards;
            }

                /*
                let diginame=digi.at(i).name;
                let digiCards = dataSources.cardsAPI.getCardsByName(diginame);
                digi[i] = {... digi.at(i), cards: digiCards};

                //Get the value of the name attribute of the digi JSON array at index i
                //let digiName=digi[i].name;

                //Consume the digimonAPI with the name of the Digimon at index i
                //let digiCards = dataSources.cardsAPI.getCardsByName(digiName);

                // Change the value of the cards attribute at index i
                //digi[i].cards = digiCards;

            return digi;
        },//doesn't work properly
    },


    //TRY AT PARENT CHILD RESOLVER ONCE AGAIN
    Digimon: {
        cards: (digimon, __, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName(digimon.name);
        }
    }*/
    }
}

module.exports=resolvers;