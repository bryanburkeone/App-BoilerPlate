const { prisma } = require("./generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({
    path: 'variables.env'
});
const createServer = require('./createServer');
const server = createServer();

// decode the JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
    
    
    console.log({
        req: req.IncomingMessage
    })
    next();
});

server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    },
},
    deets => {
        console.log(`Server is now running on port http://localhost:${deets.port}`);
    }
);

