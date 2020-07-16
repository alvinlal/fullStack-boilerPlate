import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schemas/schema';
import { createServer } from 'http';

const app = express();
app.use(cookieParser());
app.use(compression());
app.use('*', cors());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
    res.send('hello');
});
const httpServer = createServer(app);

httpServer.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
