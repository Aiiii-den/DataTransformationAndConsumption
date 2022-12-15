const mongoose= require('mongoose');
const  Schema  = mongoose.Schema;


const DigimonSchema = new Schema({
    name: String,
    required:true,
    img: String,
    level: String,
});

module.exports=model('Digimon', DigimonSchema);