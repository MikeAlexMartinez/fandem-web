import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

import InputComponent from "./InputComponent";

function Control(props) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={props.selectProps.label}
      InputProps={{
        inputComponent: InputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      InputLabelProps={{
        shrink: true
      }}
      placeholder={props.placeholder}
      {...props.selectProps.TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired
};

export default Control;
