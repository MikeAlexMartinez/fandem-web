import React, { Component } from "react";
import { withStyles, Typography, Paper, Button } from "@material-ui/core";
import Link from "next/link";
import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./SignUp.styles";

class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Page>
        <Background>
          <div className={`${classes.root} flex column jc-center ai-center`}>
            <div className={`${classes.columnItem}`}>
              <Paper className={classes.paper} elevation={1}>
                <Typography variant="h5">Create An Account</Typography>
                <Typography variant="body2">sign up here</Typography>
              </Paper>
            </div>
            <div
              className={`${classes.columnItem} flex row jc-center ai-center`}
            >
              <Link href="/">
                <Button
                  className={classes.buttons}
                  variant="outlined"
                  color="secondary"
                >
                  Home
                </Button>
              </Link>
              <Button
                className={classes.buttons}
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
            </div>
            <div className={classes.columnItem}>
              <Typography variant="body2">
                <Link href="/signin">
                  <a>Already have an account? Login</a>
                </Link>
              </Typography>
            </div>
          </div>
        </Background>
      </Page>
    );
  }
}

export default withStyles(styles)(SignUp);
