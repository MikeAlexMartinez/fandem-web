import React from "react";
import { TextField } from "@material-ui/core";

const RenderInput = ({ InputProps, classes, ref, ...other }) => (
  <TextField
    variant="outlined"
    label={InputProps.label}
    InputProps={{
      inputRef: ref,
      classes: {
        root: classes.inputRoot,
        input: classes.inputInput
      },
      ...InputProps
    }}
    {...other}
  />
);

export default RenderInput;
