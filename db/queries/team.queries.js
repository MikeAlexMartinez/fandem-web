import gql from "graphql-tag";

const PREM_TEAMS_QUERY = gql`
  query PREM_TEAMS_QUERY {
    teams {
      id
      label: name
      name
    }
  }
`;

export { PREM_TEAMS_QUERY };
