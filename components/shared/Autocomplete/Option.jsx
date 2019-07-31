import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@material-ui/core';

const Option = ({
  innerRef,
  isFocused,
  isSelected,
  innerProps,
  children,
}) => (
  <MenuItem
    buttonRef={innerRef}
    selected={isFocused}
    component="div"
    style={{
      fontWeight: isSelected ? 500 : 400,
    }}
    {...innerProps}
  >
    {children}
  </MenuItem>
);

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default Option;
