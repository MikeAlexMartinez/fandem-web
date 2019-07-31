import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import GlobalStyles from '../../shared/GlobalStyles';
import Background from '../../shared/Background';
import SignInForm from '../../shared/SignInForm';

import styles from './SignIn.styles';

const SignIn = ({ classes }) => (
  <GlobalStyles>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <SignInForm />
      </div>
    </Background>
  </GlobalStyles>
);

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);
