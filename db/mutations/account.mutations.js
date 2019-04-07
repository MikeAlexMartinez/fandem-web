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

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      emailValidated
      name
    }
  }
`;

export { CREATE_USER_MUTATION, SIGN_IN_MUTATION };
