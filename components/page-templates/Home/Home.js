import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Background from "../../shared/Background/Background";
import LargeButton from "../../shared/LargeButton/LargeButton";

import styles from "./Home.styles";

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Background>
        <CssBaseline />
        <div className={classes.root}>
          <div className={`${classes.header} ${classes.leftmargin}`}>
            <Typography variant="h1">fandem.io</Typography>
          </div>
          <div className={`${classes.subheader} ${classes.leftmargin}`}>
            <Typography variant="h4">
              The scores predictions and stats site
            </Typography>
          </div>
          <div
            className={`${classes.leftmargin} ${
              classes.topmargin
            } row jc-start ai-center`}
          >
            <Link href="/signup">
              <LargeButton
                variant="contained"
                type="primary"
                text="Sign Up"
                handler={() =>
                  Router.push({
                    pathname: "/signup"
                  })
                }
              />
            </Link>
            <Link href="/signup">
              <LargeButton
                variant="outlined"
                type="secondary"
                text="Sign In"
                handler={() =>
                  Router.push({
                    pathname: "/signin"
                  })
                }
              />
            </Link>
          </div>
        </div>
      </Background>
    );
  }
}

export default withStyles(styles)(Home);
