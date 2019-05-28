import gql from "graphql-tag";

const PREM_TEAMS_QUERY = gql`
  query PREM_TEAMS_QUERY {
    teams {
      id
      label: name
      value: name
    }
  }
`;

export { PREM_TEAMS_QUERY };
