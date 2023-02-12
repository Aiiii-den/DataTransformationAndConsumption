const FavoriteDBSchema = require("../../../SchemaDB/FavoriteDBSchema");
//const Favorite = FavoriteDBSchema.db.collection('FavoriteCard');

//create Favorites for add favorite digimon to the FavoriteSchema
const resolvers = {
    Query: {
        async getAllFavorites(){
            return await FavoriteDBSchema.find({})
        },
        async deleteFavoriteById(parent, args){
            const exist =  await FavoriteDBSchema.findOne({username: args._id});
            if(exist == null){
                return {
                    __typename: "IDNotFound",
                    message: `diese User mit ${args._id} existiert nicht`
                }
            }
            return await FavoriteDBSchema.findOneAndDelete({_id: args._id});
        },
        async deleteFavotiteByUsername(parent, args){
            const exist =  await FavoriteDBSchema.findOne({username: args.username});
            if(exist == null){
                return {
                    __typename: "UserNotFound",
                    message: `${args.username} existiert nicht`
                }
            }
            return await FavoriteDBSchema.findOneAndDelete({username:args.username});
        },
        async getFavoriteByUsername(parent, args) {
            const exist =  await FavoriteDBSchema.findOne({username: args.username});
            if(exist == null){
                return {
                    __typename: "UserNotFound",
                    message: `${args.username} existiert nicht`
                }
            }
            return await FavoriteDBSchema.findOne({username: args.username});
        },
    }
}
module.exports=resolvers;