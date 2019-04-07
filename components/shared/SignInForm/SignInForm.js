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

import { SIGN_IN_MUTATION } from "../../../db/mutations/account.mutations";

import validateEmail from "../../../utils/validators/email";
import validatePassword from "../../../utils/validators/password";
import validateForm from "../../../utils/validators/form";

import styles from "./SignInForm.styles";

class SignInForm extends Component {
  state = {
    form: {
      fields: {
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
        },
        password: {
          validator: validatePassword(8),
          valid: false,
          value: "",
          touched: false,
          error: "",
          errorMessages: {
            required: "A Password is Required",
            format: "Password should be at least 8 characters"
          },
          label: "Password"
        }
      },
      isValid: false
    }
  };

  handleBlur = e => {
    const { id, value } = e.target;
    const currentField = this.state.form.fields[id];
    const field = {
      ...currentField,
      touched: true,
      error: ((!value || value === "") && "required") || currentField.error
    };
    this.setState(prevState => {
      return {
        ...prevState,
        form: {
          ...prevState.form,
          fields: {
            ...prevState.form.fields,
            [id]: field
          }
        }
      };
    });
  };

  fetchError = id => {
    const field = this.state.form.fields[id];
    const { error, errorMessages } = field;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : " ";
  };

  handleChange = e => {
    const { id, value } = e.target;
    const formFields = this.state.form.fields;
    const field = formFields[id];
    let error = "";
    if (field.validator) {
      error = field.validator(value);
    }
    const updatedField = {
      ...field,
      error,
      value,
      touched: true,
      valid: !error
    };
    this.setState(prevState => {
      const updatedFields = {
        ...prevState.form.fields,
        [id]: updatedField
      };
      return {
        ...prevState,
        form: {
          ...prevState.form,
          fields: updatedFields,
          isValid: validateForm(updatedFields)
        }
      };
    });
  };

  render() {
    const {
      form: {
        isValid,
        fields: { email, password }
      }
    } = this.state;
    const variables = {
      email: email.value,
      password: password.value
    };
    const { classes } = this.props;
    return (
      <Mutation mutation={SIGN_IN_MUTATION} variables={variables}>
        {(signIn, { data, error, loading }) => {
          console.log(data);
          return (
            <form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                if (isValid) {
                  try {
                    await signIn();
                  } catch (e) {
                    console.error(e);
                    return;
                  }
                  Router.push({
                    pathname: "/dashboard"
                  });
                }
              }}
              className={`flex column jc-center ai-center`}
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
                    className={`${classes.paper} flex column`}
                    elevation={1}
                  >
                    <Typography variant="h5" className={`${classes.heading}`}>
                      Sign In
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
                        helperText={this.fetchError("email")}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                      />
                      {/* Password */}
                      <TextField
                        error={!!password.error}
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Please enter your Password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        helperText={this.fetchError("password")}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                      />
                    </div>
                    <Divider />
                    <div
                      className={`${classes.columnItem} ${classes.linkText}`}
                    >
                      <Typography variant="body2">
                        <Link href="/forgot">
                          <a className={`hover-link`}>Forgotten Password?</a>
                        </Link>
                      </Typography>
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
                    className={classes.buttons}
                    variant="contained"
                    color="secondary"
                    disabled={!isValid}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </fieldset>
              <div className={classes.columnItem}>
                <Typography variant="body2" className="text-center">
                  <Link href="/signup">
                    <a className={`hover-link`}>
                      Dont't have an account? Sign Up
                    </a>
                  </Link>
                </Typography>
              </div>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default withStyles(styles)(SignInForm);
