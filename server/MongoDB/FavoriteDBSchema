const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const FavCard = new Schema({
    username: {
        type: String,
        required: true,
        index: {unique: true, dropDups: true},
    },
    cardname: {
        type: String,
        required: true,
    }
})
module.exports=mongoose.model('FavoriteCard', FavCard);