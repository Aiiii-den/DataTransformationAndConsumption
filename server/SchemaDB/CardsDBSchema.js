const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CardsSchema = new Schema({
    cardnumber: ID,
    name: String,
    color: String,
    level: Int,
    digi_type: String,
    attribute: String,
    image_url: String,
    play_cost: Int,
    evolution_cost: Int,
    img: String,
});

module.exports=mongoose.model('Cards', CardsSchema);

/*
fill db with cards json and add general image later on - ALTER KOMMENTAR / BRAINSTORMING
*/