const { GraphQLServer } = require('graphql-yoga');
const db = require('./db');
let resolvers = require('./resolvers');
const {
  prisma
} = require('./generated/prisma-client')

function createServer() {
  return new GraphQLServer({
      typeDefs: './schema.graphql',
      resolvers,
      context: {
        prisma,
      },
  });
}

module.exports = createServer;
