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

const PROFILE_PICTURE_FRAGMENT = gql`
  fragment ProfilePicture on User {
    profilePicture: photos(where: { isProfile: true }) {
      id
      image
    }
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
        id
        label: name
        name
        shortName
      }
      country {
        id
        label: name
        name
      }
      ...ProfilePicture
      displayName
      isPrivate
      emailValidated
      subscriptions {
        name
      }
      userRoles {
        name
      }
      followers {
        followers {
          user {
            displayName
            isPrivate
            ...ProfilePicture
          }
        }
      }
      influencers {
        influencers {
          user {
            displayName
            isPrivate
            ...ProfilePicture
          }
        }
      }
    }
  }
  ${PROFILE_PICTURE_FRAGMENT}
`;

const COUNTRIES_QUERY = gql`
  query COUNTRIES_QUERY {
    countries {
      id
      label: name
      name
    }
  }
`;

export {
  DISPLAY_NAME_EXISTS_QUERY,
  EMAIL_EXISTS_QUERY,
  CURRENT_USER_QUERY,
  COUNTRIES_QUERY
};
