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

import ErrorMessage from "../ErrorMessage/ErrorMessage";

// Utils
import validateHexToken from "../../../utils/validators/hexToken";
import validatePassword, {
  valuesMatch
} from "../../../utils/validators/password";
import validateForm from "../../../utils/validators/form";

import { RESET_PASSWORD_MUTATION } from "../../../db/mutations/account.mutations";

import styles from "./ResetForm.styles";

class ResetForm extends Component {
  constructor(props) {
    super(props);

    const token = props.token || "";
    const hexValidator = validateHexToken(40);
    const tokenError = hexValidator(token);
    this.state = {
      form: {
        fields: {
          resetToken: {
            validator: hexValidator,
            valid: tokenError === null,
            value: token,
            touched: false,
            error: tokenError || "",
            errorMessages: {
              required: "A Token is Required",
              format:
                "The token should be a valid Hex string with 40 characters"
            },
            label: "Reset Code"
          },
          password: {
            validator: validatePassword(8),
            valid: false,
            value: "",
            touched: false,
            error: "",
            errorMessages: {
              required: "A Password is Required",
              format: "Password must be at least 8 characters"
            },
            label: "Password"
          },
          confirmPassword: {
            formValidator: valuesMatch("password"),
            valid: false,
            value: "",
            touched: false,
            error: "",
            errorMessages: {
              mismatch: "Your passwords must match"
            },
            label: "Confirm Password"
          }
        },
        isValid: false
      }
    };
  }

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

  handleChange = e => {
    const { id, value } = e.target;
    const formFields = this.state.form.fields;
    const field = formFields[id];
    let error = "";
    if (field.validator) {
      error = field.validator(value);
    }
    if (error === "" && field.formValidator) {
      error = field.formValidator(formFields, value);
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

  fetchError = id => {
    const field = this.state.form.fields[id];
    const { error, errorMessages } = field;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : " ";
  };

  render() {
    const {
      form: { isValid, fields }
    } = this.state;
    const variables = {
      resetToken: fields.resetToken.value,
      password: fields.password.value,
      confirmPassword: fields.confirmPassword.value
    };
    const { classes, token } = this.props;
    return (
      <Mutation mutation={RESET_PASSWORD_MUTATION} variables={variables}>
        {(resetPassword, { error, loading }) => {
          return (
            <form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                if (isValid) {
                  try {
                    const { data } = await resetPassword();
                    Router.push({
                      pathname: "/signin",
                      query: {
                        reset: true,
                        email:
                          (data &&
                            data.resetPassword &&
                            data.resetPassword.email) ||
                          ""
                      }
                    });
                  } catch (e) {
                    console.error(e);
                    return;
                  }
                }
              }}
              className={`flex column jc-center ai-center`}
            >
              {error && <ErrorMessage message={"We encountered an Error!"} />}
              <fieldset
                className={`flex column jc-start ai-stretch`}
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
                    <Typography variant="h5" className={classes.heading}>
                      Create New Password
                    </Typography>
                    {!token && (
                      <React.Fragment>
                        <Divider />
                        <div className={classes.inputGroup}>
                          {/* Reset Token */}
                          <TextField
                            error={!!fields.resetToken.error}
                            id="resetToken"
                            type="text"
                            label="Reset Code"
                            placeholder="Please enter your Reset Code"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            helperText={this.fetchError("resetToken")}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}
                          />
                        </div>
                      </React.Fragment>
                    )}
                    <Divider />
                    <div className={classes.inputGroup}>
                      {/* Password */}
                      <TextField
                        error={!!fields.password.error}
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Please enter a Password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        helperText={this.fetchError("password")}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                      />
                      {/* Confirm Password */}
                      <TextField
                        error={!!fields.confirmPassword.error}
                        id="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        placeholder="Please repeat your Password"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        helperText={this.fetchError("confirmPassword")}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                      />
                    </div>
                  </Paper>
                </div>
              </fieldset>
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
                  type="submit"
                  className={classes.buttons}
                  variant="contained"
                  color="secondary"
                  disabled={!isValid}
                >
                  Submit New Password
                </Button>
              </div>
              <div className={classes.columnItem}>
                <Typography variant="body2" className="text-center">
                  <Link href="/signin">
                    <a className={`hover-link`}>
                      Already have an account? Login
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

export default withStyles(styles)(ResetForm);
