const FavoriteDBSchema = require("../../../MongoDB/FavoriteDBSchema");
//const Favorite = FavoriteDBSchema.db.collection('FavoriteCard');

//create Mutation for add favorite digimon to the FavoriteSchema
const Mutations = {
     Mutation:{

        async addFavorite(parent, args, context, info){
                const exist =  await FavoriteDBSchema.findOne({username: args.username});
                if(exist != null){
                    throw new Error(`${args.username} existiert bereits!`)
                }
                if(args.cardname == ""){
                    throw new Error("cardname darf nicht leer sein!!")
                }
                const card =  new FavoriteDBSchema({
                    username: args.username,
                    cardname: args.cardname,
                });
                await card.save();
                console.log(card);
                return card;
        },        
            


        async getAllFavorites(req, res){
            return await FavoriteDBSchema.find({})
        },

        async updateFavoriteByUsername(parent, args){
            return await FavoriteDBSchema.findOneAndReplace({username: args.username}, {username: args.username, cardname: args.cardname});
        },

        async deleteFavoriteById(parent, args, context, info){
            return await FavoriteDBSchema.findOneAndDelete({_id: args._id});
        },
        async deleteFavotiteByUsername(parent, args){
            return await FavoriteDBSchema.findOneAndDelete({username:args.username});
        },

        async getFavoriteByUsername(parent, args) {
            return await FavoriteDBSchema.findOne({username: args.username});
        },
     }
}
module.exports=Mutations;