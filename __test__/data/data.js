const casual = require('casual');

casual.seed(777);

export const fakeUser = () => ({
  __typename: 'User',
  id: casual.uuid,
  displayName: casual.word,
  name: casual.full_name,
  phoneNumber: casual.phone,
  email: casual.email,
  userRoles: [
    {
      __typename: 'UserRole',
      name: 'USER',
    },
  ],
  followers: {
    __typename: 'UserFollower',
    followers: [],
  },
  country: null,
  profilePicture: [],
  influencers: {
    __typename: 'UserInfluencer',
    influencers: [],
  },
  countryCode: null,
  isPrivate: false,
  subscriptions: [
    {
      __typename: 'Subscription',
      name: 'FREE',
    },
  ],
  emailValidated: false,
  favoriteTeam: null,
});

export const fakeFavoriteTeam = () => ({
  name: 'Spurs',
  shortName: 'TOT',
});

export const fakeFixture = () => ({
  __typename: 'Fixture',
  kickoffTime: '2019-08-09T19:00:00.000Z',
  finished: false,
  teamH: {
    __typename: 'HomeTeamFixture',
    homeTeam: {
      __typename: 'Team',
      name: 'Liverpool',
    },
  },
  teamA: {
    __typename: 'AwayTeamFixture',
    awayTeam: {
      __typename: 'Team',
      name: 'Norwich',
    },
  },
  event: {
    id: 'cjyjtpb940075079888jpdt4y',
    name: 'Gameweek 1',
  },
  fplCode: 1059702,
  teamHScore: null,
  minutes: 0,
  teamAScore: null,
  id: 'cjycw2ups0i3s0787mh7ya6x6',
  fixtureId: 1,
});

export const fakeGameweekData = gameweekId => ({
  __typename: 'Gameweek',
  id: gameweekId,
  deadlineTime: '2019-08-09T18:00:00.000Z',
  fplEventId: 1,
  name: 'Gameweek 1',
});

export const fakeGameData = testSeasonId => [
  {
    __typename: 'Season',
    label: '2019/20',
    id: testSeasonId,
    competition: 'Premier League',
    previousGameweek: [],
    currentGameweek: [],
    nextGameweek: [
      {
        __typename: 'Gameweek',
        id: 'cjycw2b3w0fzg0787mmcwrghl',
        deadlineTime: '2019-08-09T18:00:00.000Z',
        fplEventId: 1,
        name: 'Gameweek 1',
      },
    ],
    events: [
      {
        __typename: 'Gameweek',
        deadlineTime: '2019-08-09T18:00:00.000Z',
        name: 'Gameweek 1',
        isNext: true,
        isCurrent: false,
        id: 'cjycw2b3w0fzg0787mmcwrghl',
        fplEventId: 1,
        isPrevious: false,
        fixtures: [
          {
            __typename: 'Fixture',
            kickoffTime: '2019-08-09T19:00:00.000Z',
            finished: false,
            teamH: {
              __typename: 'HomeTeamFixture',
              homeTeam: {
                __typename: 'Team',
                name: 'Liverpool',
              },
            },
            teamA: {
              __typename: 'AwayTeamFixture',
              awayTeam: {
                __typename: 'Team',
                name: 'Norwich',
              },
            },
            event: {
              id: 'cjyjtpb940075079888jpdt4y',
              name: 'Gameweek 1',
            },
            fplCode: 1059702,
            teamHScore: null,
            minutes: 0,
            teamAScore: null,
            id: 'cjycw2ups0i3s0787mh7ya6x6',
            fixtureId: 1,
          },
          {
            __typename: 'Fixture',
            kickoffTime: '2019-08-10T11:30:00.000Z',
            finished: false,
            teamH: {
              __typename: 'HomeTeamFixture',
              homeTeam: {
                __typename: 'Team',
                name: 'West Ham',
              },
            },
            teamA: {
              __typename: 'AwayTeamFixture',
              awayTeam: {
                __typename: 'Team',
                name: 'Man City',
              },
            },
            event: {
              id: 'cjyjtpb940075079888jpdt4y',
              name: 'Gameweek 1',
            },
            fplCode: 1059709,
            teamHScore: null,
            minutes: 0,
            teamAScore: null,
            id: 'cjycw2upt0i3t0787b32wik42',
            fixtureId: 8,
          },
          {
            __typename: 'Fixture',
            kickoffTime: '2019-08-10T14:00:00.000Z',
            finished: false,
            teamH: {
              __typename: 'HomeTeamFixture',
              homeTeam: {
                __typename: 'Team',
                name: 'Bournemouth',
              },
            },
            teamA: {
              __typename: 'AwayTeamFixture',
              awayTeam: {
                __typename: 'Team',
                name: 'Sheffield Utd',
              },
            },
            event: {
              id: 'cjyjtpb940075079888jpdt4y',
              name: 'Gameweek 1',
            },
            fplCode: 1059703,
            teamHScore: null,
            minutes: 0,
            teamAScore: null,
            id: 'cjycw2upu0i3u0787n9fpb3nx',
            fixtureId: 2,
          },
          {
            __typename: 'Fixture',
            kickoffTime: '2019-08-10T14:00:00.000Z',
            finished: false,
            teamH: {
              __typename: 'HomeTeamFixture',
              homeTeam: {
                __typename: 'Team',
                name: 'Burnley',
              },
            },
            teamA: {
              __typename: 'AwayTeamFixture',
              awayTeam: {
                __typename: 'Team',
                name: 'Southampton',
              },
            },
            event: {
              id: 'cjyjtpb940075079888jpdt4y',
              name: 'Gameweek 1',
            },
            fplCode: 1059704,
            teamHScore: null,
            minutes: 0,
            teamAScore: null,
            id: 'cjycw2upu0i3v0787r7k4u2jo',
            fixtureId: 3,
          },
        ],
      },
    ],
  },
];

export const fakeTeams = () => [
  {
    __typename: 'Team',
    id: 'cjyjtpb1w002u07980vtksadu',
    name: 'Arsenal',
    label: 'Arsenal',
    value: 'Arsenal',
  },
  {
    __typename: 'Team',
    id: 'cjyjtpb1x002v07982uaa5rwj',
    name: 'Aston Villa',
    label: 'Aston Villa',
    value: 'Aston Villa',
  },
  {
    __typename: 'Team',
    id: 'cjyjtpb1x002w0798cau9prxo',
    name: 'Bournemouth',
    label: 'Bournemouth',
    value: 'Bournemouth',
  },
];

export const fakeCountries = () => [
  {
    __typename: 'Country',
    id: 'cjyjtpsk404fj0798klai91zk',
    label: 'Afghanistan',
    value: 'Afghanistan',
  },
  {
    __typename: 'Country',
    id: 'cjyjtpsk404fk0798i5iljjc0',
    label: 'Albania',
    value: 'Albania',
  },
  {
    __typename: 'Country',
    id: 'cjyjtpsk404fl0798klop5sb9',
    label: 'Algeria',
    value: 'Algeria',
  },
];

export const fakeGameweeks = () => [
  {
    __typename: 'Gameweek',
    id: 'cjyjtpb950076079801ghh65q',
    name: 'Gameweek 2',
  },
  {
    __typename: 'Gameweek',
    id: 'cjyjtpb9600770798k1v2u9od',
    name: 'Gameweek 3',
  },
  {
    __typename: 'Gameweek',
    id: 'cjyjtpb96007807982f0dn250',
    name: 'Gameweek 4',
  },
];
