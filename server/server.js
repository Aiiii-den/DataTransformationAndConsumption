const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const DigimonAPI = require('./REST/DigimonAPI');
const CardsAPI = require('./REST/CardsAPI');


const mongoose = require('mongoose');
require('dotenv').config();


 //connect to mongoDB
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection failed'));
db.once('open', () => {
    console.log('Connection to DB was successful');
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            digimonAPI: new DigimonAPI(),
            cardsAPI: new CardsAPI()
        };
    }
});


console.log("Listening! on localhost:4000");

server.listen({port: 4000});