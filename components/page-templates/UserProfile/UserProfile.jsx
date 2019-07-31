import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import GlobalStyles from '../../shared/GlobalStyles';
import PleaseSignIn from '../../shared/PleaseSignIn';
import Navigation from '../../shared/Navigation';
import CurrentUser from '../../shared/CurrentUser';

import styles from './UserProfile.styles';

const UserProfile = ({ userName }) => (
  <GlobalStyles>
    <PleaseSignIn>
      <Navigation>
        <CurrentUser>
          {({ data: { currentUser } }, error, loading) => {
            return (
              <div>
                <div>User Profile: {userName}</div>
                <div>
                  Current User: {JSON.stringify(currentUser.displayName)}
                </div>
              </div>
            );
          }}
        </CurrentUser>
      </Navigation>
    </PleaseSignIn>
  </GlobalStyles>
);

UserProfile.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default withStyles(styles)(UserProfile);
