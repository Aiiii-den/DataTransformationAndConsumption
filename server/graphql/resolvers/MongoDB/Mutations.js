const FavoriteDBSchema = require("../../../SchemaDB/FavoriteDBSchema");
//const Favorite = FavoriteDBSchema.db.collection('FavoriteCard');

//create Mutation for add favorite digimon to the FavoriteSchema
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

     }
}
module.exports=Mutations;