import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Background from "../../shared/Background/Background";
import LargeButton from "../../shared/LargeButton/LargeButton";

const backgroundShape = "static/images/shape.svg";

const styles = theme => {
  // console.log(theme);
  return {
    button: {
      margin: theme.spacing.unit
    },
    root: {
      flexGrow: 1
    },
    header: {
      marginTop: "100px",
      marginBottom: "50px"
    },
    leftmargin: {
      marginLeft: "100px"
    },
    topmargin: {
      marginTop: "50px"
    }
  };
};

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
          <div className={`${classes.leftmargin} ${classes.topmargin}`}>
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
          </div>
        </div>
      </Background>
    );
  }
}

export default withStyles(styles)(Home);
