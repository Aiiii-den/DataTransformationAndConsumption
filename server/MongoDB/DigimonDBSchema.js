const { model, Schema } = require('mongoose');

const DigimonSchema = new Schema({
    name: String,
    img: String,
    level: String,
});

module.exports=model('Digimon', DigimonSchema);