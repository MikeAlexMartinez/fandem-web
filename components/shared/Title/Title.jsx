import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import styles from './Title.styles';

const Title = ({ title, classes, children }) => (
  <div className={className(classes.root)}>
    <div className={className(classes.content, 'flex row jc-sb ai-center')}>
      <div className={className(classes.title)}>
        <Typography variant="h3">{title}</Typography>
      </div>
      {children && (
        <div
          className={className(classes.controls, 'flex row jc-end ai-center')}
        >
          {children}
        </div>
      )}
    </div>
    <Divider />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export default withStyles(styles)(Title);
