import React, { Component } from "react";
import Link from "next/link";
import { withStyles, Typography } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const styles = theme => ({
  link: {
    textDecoration: "none",
    color: "inherit"
  },
  text: {
    display: "inline-block",
    verticalAlign: "text-bottom"
  }
});

class Back extends Component {
  render() {
    const { classes, link, name } = this.props;
    return (
      <Typography variant="h6" gutterBottom>
        <Link className={classes.link} href={link}>
          <KeyboardArrowLeft />
          <span className={classes.text}>{name}</span>
        </Link>
      </Typography>
    );
  }
}

export default withStyles(styles)(Back);
