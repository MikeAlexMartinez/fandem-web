import React from 'react';
import { withStyles } from '@material-ui/styles';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import CurrentUser from '../CurrentUser';
import isAdmin from '../../../utils/is-admin';

import styles from './IsAdmin.styles';

const IsAdmin = ({ children }) => (
  <CurrentUser>
    {({ data: { currentUser } }, error, loading) => {
      if (error) {
        return <ErrorMessage message="Error loading current user" />;
      }
      if (loading) {
        return <div>loading...</div>;
      }
      if (isAdmin(currentUser)) {
        return children;
      }
      return <ErrorMessage message="You must be an admin to view this page" />;
    }}
  </CurrentUser>
);

export default withStyles(styles)(IsAdmin);
