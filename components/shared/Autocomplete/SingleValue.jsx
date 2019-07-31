import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const SingleValue = ({
  selectProps,
  innerProps,
  children,
}) => (
  <Typography
    className={selectProps.classes.singleValue}
    {...innerProps}
  >
    {children}
  </Typography>
);

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

export default SingleValue;
