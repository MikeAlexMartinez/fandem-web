import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import ForgotForm from '../../shared/ForgotForm/ForgotForm';

import GlobalStyles from '../../shared/GlobalStyles';
import Background from '../../shared/Background';

import styles from './Forgot.styles';

const Forgot = ({ classes }) => (
  <GlobalStyles>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <ForgotForm />
      </div>
    </Background>
  </GlobalStyles>
);

Forgot.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Forgot);
