import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';
import { withStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Typography } from '@material-ui/core';

import GlobalStyles from '../../shared/GlobalStyles';
import Background from '../../shared/Background/Background';
import LargeButton from '../../shared/LargeButton/LargeButton';

import styles from './Home.styles';

const Home = ({ classes }) => (
  <GlobalStyles>
    <Background>
      <CssBaseline />
      <div className={classes.root}>
        <div className={`${classes.header} ${classes.leftmargin}`}>
          <Typography variant="h1">fandem.io</Typography>
        </div>
        <div className={`${classes.subheader} ${classes.leftmargin}`}>
          <Typography variant="h4">
            The scores predictions and stats site
          </Typography>
        </div>
        <div
          className={`${classes.leftMargin} ${
            classes.topMargin
          } row jc-start ai-center`}
        >
          <Link href="/signup">
            <LargeButton
              variant="contained"
              type="primary"
              text="Sign Up"
              handler={() => Router.push({
                pathname: '/signup',
              })}
            />
          </Link>
          <Link href="/signup">
            <LargeButton
              variant="outlined"
              type="secondary"
              text="Sign In"
              handler={() => Router.push({
                pathname: '/signin',
              })}
            />
          </Link>
        </div>
      </div>
    </Background>
  </GlobalStyles>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
