const FavoriteDBSchema = require("../../../SchemaDB/FavoriteDBSchema");

//erzeugt Mutation für add, update, delete Favorite Digimon in Form vom FavoriteSchema
const Mutations = {
    Mutation:{
        async addFavorite(parent, args){
            const card =  new FavoriteDBSchema({
                username: args.username,
                cardname: args.cardname,
            });
            await card.save();
            console.log(card);
            return card;
        },

        async updateFavoriteByUsername(parent, args){
            return await FavoriteDBSchema.findOneAndReplace({username: args.username}, {username: args.username, cardname: args.cardname});
        },

        async deleteFavoriteById(parent, args){
            return await FavoriteDBSchema.findOneAndDelete({_id: args._id});
        },

        async deleteFavoriteByUsername(parent, args){
            return await FavoriteDBSchema.findOneAndDelete({username:args.username});
        },

    }
}
module.exports=Mutations;