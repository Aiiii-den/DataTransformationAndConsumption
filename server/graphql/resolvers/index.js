const resolversQ = require('./REST/Queries');
const Mutations = require('./MongoDB/Mutations');
const Favorites = require('./MongoDB/FavoritesDB');
const _ = require('lodash');


module.exports=_.merge(
    resolversQ,
    Mutations,
    Favorites
)