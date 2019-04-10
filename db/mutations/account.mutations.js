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

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

const RESET_PASSWORD_MUTATION = gql`
  mutation RESET_PASSWORD_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      email
    }
  }
`;

export {
  CREATE_USER_MUTATION,
  SIGN_IN_MUTATION,
  REQUEST_RESET_MUTATION,
  RESET_PASSWORD_MUTATION
};
