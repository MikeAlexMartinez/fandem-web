import gql from 'graphql-tag';

export const GAME_DATA_QUERY = gql`
  query GAME_DATA_QUERY {
    gameplayData {
      id
      label
      competition
      previousGameweek: events(where: {
        isPrevious: true
      }) {
        id
        fplEventId
        deadlineTime
        name
      }
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
          event {
            id
            name
          }
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

export const USER_INFO_QUERY = gql`
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

export const GAMEWEEKS_QUERY = gql`
  query GAMEWEEKS_QUERY {
    gameweeks {
      id
      name
    }
  }
`;
