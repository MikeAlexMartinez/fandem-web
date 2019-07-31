import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

import styles from './Back.styles';

const Back = ({ classes, link, name }) => (
  <Typography variant="h6" gutterBottom>
    <Link href={link}>
      <div className={classes.link}>
        <KeyboardArrowLeft />
        <span className={classes.text}>{name}</span>
      </div>
    </Link>
  </Typography>
);

Back.propTypes = {
  classes: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Back);
