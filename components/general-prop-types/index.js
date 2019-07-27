import PropTypes from 'prop-types';

export const gameweekPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fplEventId: PropTypes.number.isRequired,
  deadlineTime: PropTypes.string.isRequired,
});

export const fixturePropType = PropTypes.shape({
  kickoffTime: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  fplCode: PropTypes.number.isRequired,
  fixtureId: PropTypes.number.isRequired,
  finished: PropTypes.bool.isRequired,
  teamHScore: PropTypes.number,
  teamAScore: PropTypes.number,
  minutes: PropTypes.number.isRequired,
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  teamH: PropTypes.shape({
    homeTeam: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
  teamA: PropTypes.shape({
    awayTeam: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }),
});

export const gameweekDetailPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  fplEventId: PropTypes.number.isRequired,
  deadlineTime: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isNext: PropTypes.bool.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  isPrevious: PropTypes.bool.isRequired,
  fixtures: PropTypes.arrayOf(fixturePropType),
});
