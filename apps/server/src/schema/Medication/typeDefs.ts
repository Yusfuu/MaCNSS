import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export const typeDefs = gql`
  type Medication {
    id: ID!
    name: String!
    price: Float!
    refundable: Boolean!
    refundablePercent: Float!
  }

  type Query {
    medications: [Medication!]!
    medication(id: ID!): Medication
  }

  input MedicationInput {
    name: String!
    price: Float!
    refundable: Boolean!
  }

  type Mutation {
    createMedication(input: MedicationInput!): Medication
    updateMedication(id: ID!, input: MedicationInput!): Medication
    deleteMedication(id: ID!): Medication
  }
`;
