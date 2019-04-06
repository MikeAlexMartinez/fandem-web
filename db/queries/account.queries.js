import gql from "graphql-tag";

const EMAIL_EXISTS_QUERY = gql`
  query EMAIL_EXISTS_QUERY($email: String!) {
    checkEmail(email: $email)
  }
`;

export { EMAIL_EXISTS_QUERY };
