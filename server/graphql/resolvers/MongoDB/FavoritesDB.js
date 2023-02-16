const FavoriteDBSchema = require("../../../SchemaDB/FavoriteDBSchema");

//get Anfrage für Favorite Digimon an die Datenbank
const resolvers = {
    Query: {
        async getAllFavorites(){
            return await FavoriteDBSchema.find({})
        },

        async getFavoriteByUsername(parent, args) {
            return await FavoriteDBSchema.findOne({username: args.username});
        },

    }
}
module.exports=resolvers;