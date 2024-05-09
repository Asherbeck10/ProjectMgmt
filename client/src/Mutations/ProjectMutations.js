import { gql } from '@apollo/client';

// This is the mutation that will be used to add a new project to the database.
// It takes in the name, description, status and client of the project as arguments.
// It returns the id, name, description, status and clientId of the newly added project.
const ADD_PROJECT = gql`
  mutation addProject(
    $name: String!
    $description: String!
    $status: ProjectStatus!
    $clientId: ID!
  ) {
    addProject(
      name: $name
      description: $description
      status: $status
      clientId: $clientId
    ) {
      id
      name
      description
      status
      client {
        id
        name
        email
        phone
      }
    }
  }
`;
export { ADD_PROJECT };
