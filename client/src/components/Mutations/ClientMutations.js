import { gql } from '@apollo/client';

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
export { DELETE_CLIENTS };
