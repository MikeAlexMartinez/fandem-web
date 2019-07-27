import gql from 'graphql-tag';

export const test = 'test';

export const UPDATE_FIXTURE_MUTATION = gql`
  mutation updateFixture(
    $fplCode: Int!
    $teamHScore: Int
    $teamAScore: Int
    $finished: Boolean!
    $kickoffTime: DateTime
    $minutes: Int!
    $eventId: ID!
  ) {
    updateFixture(
      where: {
        fplCode: $fplCode
      },
      data: {
        teamHScore: $teamHScore
        teamAScore: $teamAScore
        finished: $finished
        kickoffTime: $kickoffTime
        minutes: $minutes
        event: {
          connect: {
            id: $eventId
          }
        }
      }
    ) {
      id
      fplCode
      event {
        id
        name
      }
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
`;
