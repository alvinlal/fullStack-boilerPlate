import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({ uri: 'http://localhost:4000/graphql' });

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link,
});

export default client;
