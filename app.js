require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    engine: {reportSchema: true}
});

console.log(process.env.APOLLO_KEY);

server.listen()
    .then(({url}) => {
        console.log(`Server listening on ${url}`)
    });