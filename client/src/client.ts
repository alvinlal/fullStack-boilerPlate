import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({ uri: '/graphql' });

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link,
});

export default client;
