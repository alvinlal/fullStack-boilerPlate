import express from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from './schemas/schema';
import { createServer } from 'http';
import path from 'path';

const app = express();
app.use(cookieParser());
app.use(compression());
app.use('*', cors());

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
});

app.use(express.static(path.resolve(__dirname, '../../client/dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

server.applyMiddleware({ app });

const httpServer = createServer(app);

httpServer.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
