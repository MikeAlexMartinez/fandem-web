import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { UNSELECTED_GAMEWEEKS_QUERY } from '../../../db/queries/fpl.queries';

const UnselectedGameweeks = ({ children, gameweekId }) => (
  <Query
    query={UNSELECTED_GAMEWEEKS_QUERY}
    variables={{
      gameweekId,
    }}
  >
    {payload => children(payload)}
  </Query>
);

UnselectedGameweeks.propTypes = {
  gameweekId: PropTypes.number.isRequired,
};

export default UnselectedGameweeks;
