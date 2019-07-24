import PropTypes from 'prop-types';

export const gameweekPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fplEventId: PropTypes.number.isRequired,
  deadlineTime: PropTypes.string.isRequired,
});

export const other = PropTypes.shape({
  test: PropTypes.string.isRequired,
});
