import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Typography,
  Divider,
  TextField,
  Button
} from "@material-ui/core";
import Link from "next/link";

import validateEmail from "../../../utils/validators/email";
import validateForm from "../../../utils/validators/form";

import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

import styles from "./Forgot.styles";

class Forgot extends Component {
  state = {
    email: {
      validator: validateEmail(),
      valid: false,
      value: "",
      touched: false,
      error: "",
      errorMessages: {
        required: "An Email is Required",
        format: "Please provide a valid Email format"
      },
      label: "Email"
    }
  };

  fetchError = () => {
    const { error, errorMessages } = this.state.email;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : " ";
  };

  handleChange = e => {
    const { value } = e.target;
    const email = this.state.email;
    let error = "";
    if (email.validator) {
      error = email.validator(value);
    }
    const updatedField = {
      ...email,
      error,
      value,
      touched: true,
      valid: !error
    };
    this.setState(() => ({
      email: updatedField
    }));
  };

  handleBlur = e => {
    const { value } = e.target;
    const email = this.state.email;
    const updatedEmail = {
      ...email,
      touched: true,
      error: !value || value === "" ? "required" : email.error
    };
    this.setState(() => ({
      email: updatedEmail
    }));
  };

  render() {
    const { email } = this.state;
    const { classes } = this.props;
    return (
      <Page>
        <Background>
          <div className={`${classes.root} flex column jc-center ai-center`}>
            <div className={`${classes.columnItem}`}>
              <Paper className={`${classes.paper} flex column `} elevation={1}>
                <Typography variant="h5" className={`${classes.heading}`}>
                  Reset Your Password
                </Typography>
                <Divider />
                <div className={classes.inputGroup}>
                  {/* Email */}
                  <TextField
                    error={!!email.error}
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Please enter your Email"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    helperText={this.fetchError()}
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                  />
                </div>
                {/* <Divider /> */}
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
                color="secondary"
                disabled={!email.isValid}
              >
                Reset Password
              </Button>
            </div>
          </div>
        </Background>
      </Page>
    );
  }
}

export default withStyles(styles)(Forgot);
