import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    cin: String!
    city: String!
    address: String!
    phone: String!
    documents: [Document]
  }

  input UserInput {
    name: String!
    email: String!
    cin: String!
    city: String!
    address: String!
    phone: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: UserInput!): User!
    deleteUser(id: ID!): User
    updateUser(id: ID!, input: UserInput!): User
  }
`;
