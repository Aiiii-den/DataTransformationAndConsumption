const resolvers={
    Query: {
        digimons: (_ , __, {dataSources}) => {
            return dataSources.digimonAPI.getAllDigimon();
        },
        //ruft die Methode getAllDigimon in der DigimonAPI definierten Datei ab und spuckt JSON Datenstruktur mit name, img & level des Digimons aus
    },

    Digimon: {
        /*digimon: ({name}, _, {dataSources}) => {
            return dataSources.digimonAPI.getDigimonFromName(name);
        },*/ //ALTER KOMMENTAR

        cards: (digimons, __, {dataSources}) => {
            return dataSources.cardsAPI.getCardsByName((digimons.name))
        }
        //soll den Output der digimons Abfrage/Query nutzen um mit diesem alle spezifischen Cards aller Digimons abzurufen
        //-> Input = alle Digimons der DigimonAPI
        //-> Output: alle Cards aller Digimon mit allen Cards Attributen (siehe ../typeDefs.js)
    },
}

module.exports=resolvers;