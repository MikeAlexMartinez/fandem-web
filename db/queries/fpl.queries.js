import gql from 'graphql-tag';

const GAME_DATA_QUERY = gql`
  query GAME_DATA_QUERY {
    gameplayData {
      id
      label
      competition
      currentGameweek: events(where: {
        isCurrent: true
      }) {
        id
        fplEventId
        deadlineTime
        name
      }
      nextGameweek: events(where: {
        isNext: true
      }) {
        id
        fplEventId
        deadlineTime
        name
      }
      events {
        id
        fplEventId
        deadlineTime
        name
        isNext
        isCurrent
        isPrevious
        fixtures {
          id
          fplCode
          fixtureId
          kickoffTime
          teamAScore
          teamA {
            awayTeam {
              name
            }
          }
          teamHScore
          teamH {
            homeTeam {
              name
            }
          }
          finished
          minutes
        }
      }
    }
  }
`;

const USER_INFO_QUERY = gql`
  query USER_INFO_QUERY {
    users {
      name
      email
      subscriptions {
        name
      }
      userRoles {
        name
      }
    }
  }
`;

export {
  GAME_DATA_QUERY,
  USER_INFO_QUERY,
};
