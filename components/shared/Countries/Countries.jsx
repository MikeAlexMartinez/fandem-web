import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { COUNTRIES_QUERY } from '../../../db/queries/account.queries';

const Countries = (props) => {
  const { children } = props;
  return (
    <Query {...props} query={COUNTRIES_QUERY}>
      {payload => children(payload)}
    </Query>
  );
};

Countries.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Countries;
