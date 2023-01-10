const resolvers = require('./REST/Queries');
const mutations = require('./MongoDB/Mutations');


module.exports={
    Query: {
        ...resolvers.Query, 
        //...mutations.Query,
    },

}