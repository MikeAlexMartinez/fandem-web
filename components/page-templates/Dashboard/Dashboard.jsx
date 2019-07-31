import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Navigation from '../../shared/Navigation';

import GlobalStyles from '../../shared/GlobalStyles';
import PleaseSignIn from '../../shared/PleaseSignIn';

import styles from './Dashboard.styles';

const Dashboard = ({ token }) => {
  console.log(token);
  return (
    <GlobalStyles>
      <PleaseSignIn>
        <Navigation>This is The Dashboard!</Navigation>
      </PleaseSignIn>
    </GlobalStyles>
  );
}

Dashboard.propTypes = {
  token: PropTypes.string.isRequired,
};

export default withStyles(styles)(Dashboard);
