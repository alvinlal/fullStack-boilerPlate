import { gql } from 'apollo-server-express';
import { Mutation, Query } from '../resolvers';

const typeDefs = gql`
    type Query {
        helloWorld: String!
    }
    type Mutation {
        helloWorld(url: String!): String!
    }
`;
const resolvers = {
    Query,
    Mutation,
};

export { typeDefs, resolvers };
