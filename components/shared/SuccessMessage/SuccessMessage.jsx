import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { CheckCircle } from '@material-ui/icons';

import styles from './SuccessMessage.styles';

const SuccessMessage = ({ message, classes }) => (
  <Paper className={`${classes.container} flex column jc-start ai-stetch`}>
    <div className={`${classes.columnItem} flex root row jc-start ai-center`}>
      <Typography variant="h5">Success!</Typography>
    </div>
    <div className={`${classes.columnItem} flex root row jc-start ai-center`}>
      <CheckCircle className={classes.icon} />
      <Typography variant="subtitle1">{message}</Typography>
    </div>
  </Paper>
);

SuccessMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
};

export default withStyles(styles)(SuccessMessage);
