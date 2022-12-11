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
    isFav: Boolean,
});

module.exports=model('Cards', CardsSchema);
