const { ApolloServer } = require('apollo-server');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const DigimonAPI = require('./REST/DigimonAPI');
const CardsAPI = require('./REST/CardsAPI');
/*
const MongoDB = "mongodb+srv://dbUser:userdb@digimonapi0.dz1m4an.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require('mongoose');

mongoose.connect(MongoDB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected");
        server.listen({port: 5000});
    })
    .then((res) =>{
        console.log(`Listening! on localhost:5000`);
    })
*/ //MongoDB erstmal ignorieren, Datenbank und User wurden auch schon von mir terminiert, damit keine Sicherheitslücke entsteht


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


console.log("Listening! on localhost:5000");

server.listen({port: 5000});