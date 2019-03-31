import React from "react";
import { Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  largeButton: {
    padding: "0.5rem 2rem",
    fontSize: "1.5rem",
    marginRight: "50px",
    "&:last-child": {
      marginRight: "0"
    }
  }
});

const LargeButton = ({ classes, text, type, variant, handler }) => (
  <Button
    variant={variant}
    color={type}
    className={classes.largeButton}
    onClick={handler}
  >
    {text}
  </Button>
);

export default withStyles(styles)(LargeButton);
