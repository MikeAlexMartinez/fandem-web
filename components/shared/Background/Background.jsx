import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import styles from './Background.styles';

const Background = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

Background.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Background);
