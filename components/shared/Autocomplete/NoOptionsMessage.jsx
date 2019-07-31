import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const NoOptionsMessage = ({
  selectProps,
  innerProps,
  children,
}) => (
  <Typography
    color="textSecondary"
    className={selectProps.classes.noOptionsMessage}
    {...innerProps}
  >
    {children}
  </Typography>
);

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

export default NoOptionsMessage;
