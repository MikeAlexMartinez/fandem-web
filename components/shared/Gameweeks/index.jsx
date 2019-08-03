import React from 'react';
import { Query } from 'react-apollo';
import { GAMEWEEKS_QUERY } from '../../../db/queries/fpl.queries';

const Gameweeks = ({ children }) => (
  <Query
    query={GAMEWEEKS_QUERY}
  >
    {payload => children(payload)}
  </Query>
);

export default Gameweeks;
