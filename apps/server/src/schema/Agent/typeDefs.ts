import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Agent {
    id: ID!
    name: String!
    email: String!
    password: String!
  }

  type Query {
    agents: [Agent]!
  }

  type AuthPayload {
    token: String!
    user: Agent!
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
    createAgent(name: String!, email: String!, password: String!): Agent
    updateAgent(id: ID!, name: String, email: String, password: String): Agent
    deleteAgent(id: ID!): Agent
  }
`;
