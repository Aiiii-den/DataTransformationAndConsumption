const FavoriteDBSchema = require("../../../MongoDB/FavoriteDBSchema");
//const Favorite = FavoriteDBSchema.db.collection('FavoriteCard');

//create Mutation for add favorite digimon to the FavoriteSchema

const Mutations = {
    Mutation:{
    async addFavorite(parent, args, context, info){
            const exist =  await FavoriteDBSchema.findOne({username: args.username});
            if(exist != null){
                return {
                    __typename: "UserAlreadyExists",
                    message: `Der Username: ${args.username} ist bereits vergeben!`
                }
            }
            if(args.cardname == ""){
                return {
                    __typename: "InputCannotBeNull",
                    message: "Das Eingabefeld für Karten ist leer!"
                }
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
        const exist =  await FavoriteDBSchema.findOne({username: args.username});
        if(exist == null){
            return {
                __typename: "UserNotFound",
                message: `Der Username: ${args.username}  wurde nicht gefunden!`
            }        }
        if(args.cardname == ""){
            return {
                __typename: "InputCannotBeNull",
                message: "Das Eingabefeld für Karten ist leer!"
            }
        }
        return await FavoriteDBSchema.findOneAndReplace({username: args.username}, {username: args.username, cardname: args.cardname});
    },

async deleteFavoriteById(parent, args, context, info){
    const exist =  await FavoriteDBSchema.findOne({username: args._id});
    if(exist == null){
        return {
            __typename: "IDNotFound",
            message: `Die ID: ${args._id} existiert nicht! Bitte überprüfen Sie Ihre Eingaben.`
        }
      }
    return await FavoriteDBSchema.findOneAndDelete({_id: args._id});
},

async deleteFavotiteByUsername(parent, args){
    const exist =  await FavoriteDBSchema.findOne({username: args.username});
    if(exist == null){
        return {
            __typename: "UserNotFound",
            message: `Der Username: ${args.username}  wurde nicht gefunden!`
        }
      }
    return await FavoriteDBSchema.findOneAndDelete({username:args.username});
},

async getFavoriteByUsername(parent, args) {
    const exist =  await FavoriteDBSchema.findOne({username: args.username});
    if(exist == null){
        return {
            __typename: "UserNotFound",
            message: `Der Username: ${args.username}  wurde nicht gefunden!`
        }
      }
    return await FavoriteDBSchema.findOne({username: args.username});
},
    }
}
module.exports=Mutations;
