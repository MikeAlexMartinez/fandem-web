import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import ResetForm from '../../shared/ResetForm/ResetForm';

import GlobalStyles from '../../shared/GlobalStyles';
import Background from '../../shared/Background';

import styles from './Reset.styles';

const Reset = ({ classes, token }) => (
  <GlobalStyles>
    <Background>
      <div className={`${classes.root} flex column jc-center ai-center`}>
        <ResetForm token={token} />
      </div>
    </Background>
  </GlobalStyles>
);

Reset.propTypes = {
  classes: PropTypes.object.isRequired,
  token: PropTypes.string,
};

export default withStyles(styles)(Reset);
