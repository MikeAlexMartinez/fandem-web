import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import styles from './LargeButton.styles';

const LargeButton = ({
  classes, text, type, variant, handler,
}) => (
  <Button
    variant={variant}
    color={type}
    className={classes.largeButton}
    onClick={handler}
  >
    {text}
  </Button>
);

LargeButton.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default withStyles(styles)(LargeButton);
