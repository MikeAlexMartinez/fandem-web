import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";

import SnackBarContent from "./SnackBarContent";

import styles from "./CustomSnackBar.styles";

import {
  TransitionLeft,
  TransitionUp,
  TransitionRight,
  TransitionDown
} from "./Transitions";

const transitions = {
  up: TransitionUp,
  down: TransitionDown,
  left: TransitionLeft,
  right: TransitionRight
};

class CustomSnackBar extends React.Component {
  state = {
    open: this.props.visible
  };

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      message,
      variant,
      visible,
      duration = 4000,
      transition = "up",
      position = {
        vertical: "bottom",
        horizontal: "left"
      }
    } = this.props;
    const Transition = transitions[transition];
    return (
      <Snackbar
        visible={visible}
        anchorOrigin={position}
        autoHideDuration={duration}
        TransitionComponent={Transition}
      >
        <SnackBarContent variant={variant} message={message} />
      </Snackbar>
    );
  }
}

CustomSnackBar.propTypes = {
  classes: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.string,
  position: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string
  })
};

export default withStyles(styles)(CustomSnackBar);
