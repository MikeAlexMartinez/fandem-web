import gql from "graphql-tag";

const DISPLAY_NAME_EXISTS_QUERY = gql`
  query DISPLAY_NAME_EXISTS_QUERY($displayName: String!) {
    checkDisplayName(displayName: $displayName)
  }
`;

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

export { DISPLAY_NAME_EXISTS_QUERY, EMAIL_EXISTS_QUERY, CURRENT_USER_QUERY };
