const FavoriteDBSchema = require("../../../MongoDB/FavoriteDBSchema");
//const Favorite = FavoriteDBSchema.db.collection('FavoriteCard');

//create Mutation for add favorite digimon to the FavoriteSchema
const Mutations = {
     Mutation:{
        async addFavorite(parent, args, context, info){
            const card =  new FavoriteDBSchema({
                cardname: args.cardname,
                image_url: args.image_url,
                isFav: args.isFav,
            });
            await card.save();
            console.log(card);
            return card;
        },
     }
}
module.exports=Mutations;