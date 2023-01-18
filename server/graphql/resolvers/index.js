const resolversQ = require('./REST/Queries');
const Mutations = require('./MongoDB/Mutations');
const _ = require('lodash');


module.exports=_.merge(
    resolversQ,
    Mutations
)