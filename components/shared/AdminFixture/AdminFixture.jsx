import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';

import styles from './AdminFixture.styles';

const AdminFixture = ({ classes }) => (
  <div className={classnames(classes.container)}>AdminFixture</div>
);

AdminFixture.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminFixture);
