const { model, Schema } = require('mongoose');

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

module.exports=model('Cards', CardsSchema);

/*
fill db with cards json and add general image later on - ALTER KOMMENTAR / BRAINSTORMING
*/