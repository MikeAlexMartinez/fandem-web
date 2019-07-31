import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/styles';

import styles from './DeletePicture.styles';

const DeletePicture = ({ classes }) => (
  <div className={classNames(classes.container, 'flex row jc-sb ai-center')} />
);

DeletePicture.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeletePicture);
