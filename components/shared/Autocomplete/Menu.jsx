import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';

const Menu = ({ selectProps, innerProps, children }) => (
  <Paper
    square
    className={selectProps.classes.paper}
    {...innerProps}
  >
    {children}
  </Paper>
);

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

export default Menu;
