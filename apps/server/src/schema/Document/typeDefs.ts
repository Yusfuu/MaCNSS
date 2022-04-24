import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  enum DocumentStatus {
    PENDING
    APPROVED
    REJECTED
  }

  type Document {
    id: ID!
    user: User!
    medication: [Medication!]!
    status: DocumentStatus!
    balanceDue: Float!
  }

  type Query {
    documents: [Document!]!
    document(id: ID!): Document
  }

  type Mutation {
    createDocument(user: ID!, medication: [ID!]!): Document
    updateDocumentStatus(id: ID!, status: DocumentStatus!): Document
    deleteDocument(id: ID!): Document
    bulkDeleteDocuments(ids: [ID!]!): Int
  }
`;
