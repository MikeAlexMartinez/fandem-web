import gql from "graphql-tag";

const PREM_TEAMS_QUERY = gql`
  query PREM_TEAMS_QUERY {
    teams(orderBy: name_ASC) {
      id
      name
      label: name
      value: name
    }
  }
`;

export { PREM_TEAMS_QUERY };
