import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Typography } from "@material-ui/core";
import Background from "../../shared/Background/Background";

const backgroundShape = "static/images/shape.svg";

const styles = theme => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1
    },
    header: {
      marginTop: "100px",
      marginBottom: "100px"
    },
    leftmargin: {
      marginLeft: "100px"
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
            <Typography variant="headline">
              Where football fans come to demonstrate how accurate their
              predictions are.
            </Typography>
          </div>
        </div>
      </Background>
    );
  }
}

export default withStyles(styles)(Home);
