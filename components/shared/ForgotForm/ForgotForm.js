import React, { Component } from "react";
import {
  withStyles,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
  LinearProgress
} from "@material-ui/core";
import Link from "next/link";
import Router from "next/router";
import { Mutation } from "react-apollo";

import validateEmail from "../../../utils/validators/email";

import styles from "./ForgotForm.styles";
import { REQUEST_RESET_MUTATION } from "../../../db/mutations/account.mutations";

class ForgotForm extends Component {
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

  triggerRequestReset = async requestReset => {
    try {
      const data = await requestReset();
      console.log("success!!!");
      console.log(data);
      Router.push({
        pathname: "/reset"
      });
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { email } = this.state;
    const { classes } = this.props;
    return (
      <Mutation
        mutation={REQUEST_RESET_MUTATION}
        variables={{
          email: email.value
        }}
      >
        {(requestReset, { data, loading, error }) => {
          return (
            <form
              method="POST"
              onSubmit={e => {
                e.preventDefault();
                if (email.valid) {
                  this.triggerRequestReset(requestReset);
                }
              }}
            >
              {error && <div>We encountered an Error!</div>}
              <fieldset
                className={`${
                  classes.fieldset
                } flex column jc-start ai-stretch`}
                disabled={loading}
                aria-busy={loading}
              >
                <div className={`${classes.columnItem}`}>
                  {loading ? (
                    <LinearProgress variant="query" />
                  ) : (
                    <LinearProgress variant="determinate" value={0} />
                  )}
                  <Paper
                    className={`${classes.paper} flex column `}
                    elevation={1}
                  >
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
                  </Paper>
                </div>
                <div
                  className={`${
                    classes.columnItem
                  } flex row jc-center ai-center`}
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
                    type="submit"
                    className={classes.buttons}
                    variant="contained"
                    color="secondary"
                    disabled={!email.valid}
                  >
                    Reset Password
                  </Button>
                </div>
              </fieldset>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default withStyles(styles)(ForgotForm);
