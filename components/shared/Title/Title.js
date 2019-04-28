import React from "react";
import PropTypes from "prop-types";
import className from "classnames";
import { withStyles, Typography, Divider } from "@material-ui/core";

const styles = theme => ({
  root: { marginBottom: theme.spacing.unit * 2 },
  content: { marginBottom: theme.spacing.unit * 2 },
  title: { marginLeft: theme.spacing.unit * 2 },
  controls: { marginRight: theme.spacing.unit * 2 }
});

const Title = ({ title, classes, children }) => (
  <div className={className(classes.root)}>
    <div className={className(classes.content, "flex row jc-sb ai-center")}>
      <div className={className(classes.title)}>
        <Typography variant="h3">{title}</Typography>
      </div>
      {children && (
        <div className={className(classes.controls)}>{children}</div>
      )}
    </div>
    <Divider />
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
