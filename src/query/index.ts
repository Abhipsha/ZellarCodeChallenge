import {gql} from '@apollo/client';
export const GET_USERS = gql`
  query GetZellerCustomer($id: String) {
    getZellerCustomer(id: $id) {
      id
      name
      email
      role
    }
  }
`;
// type Query {
//   getZellerCustomer(id: String!): ZellerCustomer
//   listZellerCustomers(
//     filter: TableZellerCustomerFilterInput
//     limit: Int
//     nextToken: String
//   ): ZellerCustomerConnection
// }

// type ZellerCustomer {
//   id: String!
//   name: String
//   email: String
//   role: String
// }

// input TableZellerCustomerFilterInput {
//   id: TableStringFilterInput
//   name: TableStringFilterInput
//   email: TableStringFilterInput
//   role: TableStringFilterInput
// }

// input TableStringFilterInput {
//   ne: String
//   eq: String
//   le: String
//   lt: String
//   ge: String
//   gt: String
//   contains: String
//   notContains: String
//   between: [String]
//   beginsWith: String
// }

// type ZellerCustomerConnection {
//   items: [ZellerCustomer]
//   nextToken: String
// }
