import React from "react";
import PropTypes from "prop-types";

import { withStyles, Typography, Paper } from "@material-ui/core";
import { ErrorOutline } from "@material-ui/icons";

import styles from "./ErrorMessage.styles";

const ErrorMessage = ({ message, classes }) => {
  return (
    <Paper className={`${classes.container} flex column jc-start ai-stetch`}>
      <div className={`${classes.columnItem} flex root row jc-start ai-center`}>
        <Typography variant="h5">Error Encountered!</Typography>
      </div>
      <div className={`${classes.columnItem} flex root row jc-start ai-center`}>
        <ErrorOutline className={classes.icon} />
        <Typography variant="subtitle1">{message}</Typography>
      </div>
    </Paper>
  );
};

ErrorMessage.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired
};

export default withStyles(styles)(ErrorMessage);
