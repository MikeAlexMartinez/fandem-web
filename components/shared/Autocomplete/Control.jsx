import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

import InputComponent from './InputComponent';

const Control = ({
  selectProps,
  innerRef,
  children,
  innerProps,
  placeholder,
}) => (
  <TextField
    fullWidth
    variant="outlined"
    label={selectProps.label}
    InputProps={{
      inputComponent: InputComponent,
      inputProps: {
        className: selectProps.classes.input,
        inputRef: innerRef,
        children,
        ...innerProps,
      },
    }}
    InputLabelProps={{
      shrink: true,
    }}
    placeholder={placeholder}
    {...selectProps.TextFieldProps}
  />
);

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
};

export default Control;
