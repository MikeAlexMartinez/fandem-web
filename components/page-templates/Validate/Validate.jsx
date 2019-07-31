import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import ValidateEmailForm from '../../shared/ValidateEmailForm/ValidateEmailForm';

import GlobalStyles from '../../shared/GlobalStyles';
import Background from '../../shared/Background';

import styles from './Validate.styles';

const Validate = ({ classes, token }) => (
  <GlobalStyles>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <ValidateEmailForm token={token} />
      </div>
    </Background>
  </GlobalStyles>
);

Validate.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string,
};

export default withStyles(styles)(Validate);
