const FavoriteDBSchema = require("../../../SchemaDB/FavoriteDBSchema");
//const Favorite = FavoriteDBSchema.db.collection('FavoriteCard');

//create Favorites for add favorite digimon to the FavoriteSchema
const Favorites = {
    Favorites:{

        async getAllFavorites(req, res){
            return await FavoriteDBSchema.find({})
        },

        async getFavoriteByUsername(parent, args) {
            return await FavoriteDBSchema.findOne({username: args.username});
        },

        async deleteFavoriteById(parent, args, context, info){
            return await FavoriteDBSchema.findOneAndDelete({_id: args._id});
        },
        async deleteFavoriteByUsername(parent, args){
            return await FavoriteDBSchema.findOneAndDelete({username:args.username});
        },

    }
}
module.exports=Favorites;