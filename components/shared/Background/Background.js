import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const backgroundShape = "static/images/shape.svg";

const styles = theme => ({
  root: {
    minHeight: "100vh",
    width: "100vw",
    overflowY: "hidden",
    backgroundColor: theme.palette.grey["100"],
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px"
  }
});

const Background = ({ classes, children }) => (
  <div className={classes.root}>{children}</div>
);

Background.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Background);
