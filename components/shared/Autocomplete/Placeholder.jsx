import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Placeholder = ({
  selectProps,
  innerProps,
  children,
}) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.placeholder}
    {...innerProps}
  >
    {children}
  </Typography>
);

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

export default Placeholder;
