import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/styles';

import styles from './Template.styles';

const Template = ({ classes }) => (
  <div className={classnames(classes.container)}>Template</div>
);

Template.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Template);
