import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../../../db/queries/account.queries';

const CurrentUser = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

export default CurrentUser;
