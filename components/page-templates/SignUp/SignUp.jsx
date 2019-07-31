import React from 'react';
import { withStyles } from '@material-ui/styles';

// Components
import GlobalStyles from '../../shared/GlobalStyles';
import Background from '../../shared/Background/Background';
import SignUpForm from '../../shared/SignUpForm/SignUpForm';

import styles from './SignUp.styles';

const SignUp = () => (
  <GlobalStyles>
    <Background>
      <SignUpForm />
    </Background>
  </GlobalStyles>
);

export default withStyles(styles)(SignUp);
