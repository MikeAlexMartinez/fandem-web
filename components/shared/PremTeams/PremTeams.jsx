import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { PREM_TEAMS_QUERY } from '../../../db/queries/team.queries';

const PremTeams = (props) => {
  const { children } = props;
  return (
    <Query {...props} query={PREM_TEAMS_QUERY}>
      {payload => children(payload)}
    </Query>
  );
};

PremTeams.propTypes = {
  children: PropTypes.func.isRequired,
};

export default PremTeams;
