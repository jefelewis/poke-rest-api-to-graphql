// Imports: GraphQL
import { makeExecutableSchema } from 'graphql-tools';

// Imports: GraphQL TypeDefs & Resolvers
import TYPEDEFS from './types.js';
import RESOLVERS from './resolvers.js';


// GraphQL: Schema
const SCHEMA = makeExecutableSchema({
  typeDefs: TYPEDEFS,
  resolvers: RESOLVERS
});

// Exports
export default SCHEMA;