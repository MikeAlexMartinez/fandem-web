import gql from "graphql-tag";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    createUser(name: $name, email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export { CREATE_USER_MUTATION };
