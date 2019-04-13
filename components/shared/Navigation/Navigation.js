import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

import styles from "./Navigation.styles";

class Navigation extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>I am navigation</div>;
  }
}

export default withStyles(styles)(Navigation);
