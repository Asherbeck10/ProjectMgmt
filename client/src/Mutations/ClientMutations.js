import { gql } from '@apollo/client';

// This is the mutation that will be used to add a new client to the database.
// It takes in the name, email, and phone number of the client as arguments.
// It returns the id, name, email, and phone number of the newly added client.
const ADD_CLIENT = gql`
  mutation addClient($name: String!, $email: String!, $phone: String!) {
    addClient(name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
    }
  }
`;

// This is the mutation that will be used to delete  a client from the database.
const DELETE_CLIENTS = gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
export { ADD_CLIENT, DELETE_CLIENTS };
