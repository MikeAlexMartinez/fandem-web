import gql from "graphql-tag";

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION(
    $email: String!
    $name: String!
    $displayName: String!
    $password: String!
  ) {
    createUser(
      name: $name
      email: $email
      displayName: $displayName
      password: $password
    ) {
      id
      email
      name
      displayName
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

const REQUEST_EMAIL_VALIDATION_MUTATION = gql`
  mutation REQUEST_EMAIL_VALIDATION_MUTATION {
    requestEmailValidation {
      message
    }
  }
`;

const SUBMIT_EMAIL_TOKEN_MUTATION = gql`
  mutation SUBMIT_EMAIL_TOKEN_MUTATION($emailValidationToken: String!) {
    validateEmail(emailValidationToken: $emailValidationToken) {
      message
    }
  }
`;

const UPDATE_USER_PROFILE_MUTATION = gql`
  mutation UPDATE_USER_PROFILE_MUTATION(
    $id: ID!
    $displayName: String!
    $isPrivate: Boolean!
    $name: String
    $favoriteTeam: ID
    $country: ID
  ) {
    updateUserProfile(
      id: $id
      displayName: $displayName
      isPrivate: $isPrivate
      name: $name
      favoriteTeam: $favoriteTeam
      country: $country
    ) {
      id
      displayName
      isPrivate
      name
      favoriteTeam
      country
    }
  }
`;

export {
  CREATE_USER_MUTATION,
  SIGN_IN_MUTATION,
  REQUEST_RESET_MUTATION,
  RESET_PASSWORD_MUTATION,
  REQUEST_EMAIL_VALIDATION_MUTATION,
  SUBMIT_EMAIL_TOKEN_MUTATION,
  UPDATE_USER_PROFILE_MUTATION
};
