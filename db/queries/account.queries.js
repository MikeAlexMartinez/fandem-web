import gql from "graphql-tag";

const EMAIL_EXISTS_QUERY = gql`
  query EMAIL_EXISTS_QUERY($email: String!) {
    checkEmail(email: $email)
  }
`;

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    currentUser {
      id
      email
      name
      countryCode
      phoneNumber
      favoriteTeam {
        name
        shortName
      }
      country {
        name
      }
      displayName
      isPrivate
      emailValidated
      subscriptions {
        name
      }
      userRoles {
        name
      }
    }
  }
`;

export { EMAIL_EXISTS_QUERY, CURRENT_USER_QUERY };
