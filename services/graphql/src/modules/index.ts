import { mergeResolvers } from '@graphql-tools/merge';
import countriesTypeDefs from './countries/countries.graphql';
import countriesResolvers from './countries/countries.resolver';
import googleTypeDefs from './google/google.graphql';
import googleResolvers from './google/google.resolver';

const rootTypeDefs = `#graphql
  type Query {
    health: String
  }
`;

const rootResolvers = {
  Query: {
    health: () => 'healthy',
  },
};

export const typeDefs = [rootTypeDefs, countriesTypeDefs, googleTypeDefs];

export const resolvers = mergeResolvers([
  rootResolvers,
  countriesResolvers,
  googleResolvers,
]);
