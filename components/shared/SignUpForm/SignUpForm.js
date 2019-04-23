import React, { Component } from "react";
import {
  withStyles,
  Typography,
  Paper,
  Button,
  TextField,
  Divider,
  LinearProgress
} from "@material-ui/core";
import Link from "next/link";
import Router from "next/router";
import { Mutation, ApolloConsumer } from "react-apollo";

// Utils
import validateEmail from "../../../utils/validators/email";
import validatePassword, {
  valuesMatch
} from "../../../utils/validators/password";
import validateForm from "../../../utils/validators/form";
import validateDisplayName from "../../../utils/validators/display-name";

// Queries / Mutations
import { CREATE_USER_MUTATION } from "../../../db/mutations/account.mutations";
import {
  EMAIL_EXISTS_QUERY,
  DISPLAY_NAME_EXISTS_QUERY
} from "../../../db/queries/account.queries";

// styles
import styles from "./SignUpForm.styles";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class SignUpForm extends Component {
  state = {
    form: {
      fields: {
        name: {
          valid: false,
          value: "",
          checking: false,
          touched: false,
          error: "",
          errorMessages: {
            required: "A Name is Required"
          },
          label: "Name"
        },
        email: {
          validator: validateEmail(),
          valid: false,
          value: "",
          checking: false,
          touched: false,
          error: "",
          errorMessages: {
            emailExists: "Email Exists",
            emailUnchecked: "Unable to check email",
            required: "An Email is Required",
            format: "Please provide a valid Email format"
          },
          label: "Email"
        },
        displayName: {
          validator: validateDisplayName(40),
          valid: false,
          value: "",
          checking: false,
          touched: false,
          error: "",
          errorMessages: {
            displayNameExists: "Display Name Exists",
            displayNameUnchecked: "Unable to check Display Name",
            required: "A Display Name is Required",
            format:
              "Please provide a valid format (letters, numbers, hyphens, underscores, spaces & apostrophes)",
            length: "Your Display Name should be 40 character or less"
          },
          label: "Display Name"
        },
        password: {
          validator: validatePassword(8),
          valid: false,
          value: "",
          checking: false,
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
          checking: false,
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

  resetForm = () => {
    this.state = startState;
  };

  handleChange = (e, checking) => {
    const { id, value } = e.target;
    const formFields = this.state.form.fields;
    const field = formFields[id];
    let error = "";
    if (field.validator) {
      error = field.validator(value);
      console.log(error);
    }
    if (error === "" && field.formValidator) {
      error = field.formValidator(formFields, value);
    }
    const updatedField = {
      ...field,
      error,
      value,
      // only checking if error is missing and checking passed in
      checking: !error && checking,
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

    // return updated field to allow async checkers to work
    return updatedField;
  };

  handleEmailChange = async ({ event, client }) => {
    // use normal change client
    const { id } = event.target;
    const updatedField = this.handleChange(event, true);
    if (updatedField.valid) {
      let error;

      // check if email exists
      try {
        const { data } = await client.query({
          query: EMAIL_EXISTS_QUERY,
          variables: { email: updatedField.value }
        });
        if (data.checkEmail) {
          error = "emailExists";
        }
      } catch (e) {
        console.error(e);
        error = `emailUnchecked`;
      }

      const asyncUpdatedField = {
        ...updatedField,
        error,
        checking: false,
        valid: !error
      };

      this.setState(prevState => {
        const updatedFields = {
          ...prevState.form.fields,
          [id]: asyncUpdatedField
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
    }
  };

  handleDisplayNameChange = async ({ event, client }) => {
    const { id } = event.target;
    const updatedField = this.handleChange(event, true);
    if (updatedField.valid) {
      let error;

      // check if displayName exists
      try {
        const { data } = await client.query({
          query: DISPLAY_NAME_EXISTS_QUERY,
          variables: { displayName: updatedField.value }
        });
        if (data.checkDisplayName) {
          error = "displayNameExists";
        }
      } catch (e) {
        console.error(e);
        error = "displayNameUnchecked";
      }

      const asyncUpdatedField = {
        ...updatedField,
        error,
        checking: false,
        valid: !error
      };

      this.setState(prevState => {
        const updatedFields = {
          ...prevState.form.fields,
          [id]: asyncUpdatedField
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
    }
  };

  render() {
    const {
      form: {
        isValid,
        fields: { email, name, password, displayName, confirmPassword }
      }
    } = this.state;
    const variables = {
      email: email.value,
      name: name.value,
      displayName: displayName.value,
      password: password.value
    };
    const { classes } = this.props;
    return (
      <Mutation mutation={CREATE_USER_MUTATION} variables={variables}>
        {(createUser, { error, loading }) => {
          return (
            <form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                if (isValid) {
                  try {
                    await createUser();
                  } catch (e) {
                    console.error(e);
                    return;
                  }
                  Router.push({
                    pathname: "/dashboard",
                    query: { firstVisit: true }
                  });
                }
              }}
              className={`${classes.root} flex column jc-center ai-center`}
            >
              {error && <ErrorMessage message={"We encountered an Error!"} />}
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
                      Create An Account
                    </Typography>
                    <Divider />
                    <div className={classes.inputGroup}>
                      {/* Email - check email asynchronously */}
                      <ApolloConsumer>
                        {client => (
                          <TextField
                            error={!!email.error}
                            id="email"
                            type="email"
                            label="Email"
                            autoComplete="email"
                            placeholder="Please enter your Email"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            helperText={this.fetchError("email")}
                            onBlur={this.handleBlur}
                            onChange={event => {
                              this.handleEmailChange({
                                event,
                                client
                              });
                            }}
                          />
                        )}
                      </ApolloConsumer>
                      {/* Name */}
                      <TextField
                        error={!!name.error}
                        id="name"
                        type="text"
                        label="Name"
                        placeholder="Please enter your Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        helperText={this.fetchError("name")}
                        onBlur={this.handleBlur}
                        onChange={this.handleChange}
                      />
                      {/* Display Name - check email asynchronously */}
                      <ApolloConsumer>
                        {client => (
                          <TextField
                            error={!!displayName.error}
                            id="displayName"
                            type="text"
                            label="Display Name"
                            placeholder="Please enter a Display Name"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            helperText={this.fetchError("displayName")}
                            onBlur={this.handleBlur}
                            onChange={event => {
                              this.handleDisplayNameChange({
                                event,
                                client
                              });
                            }}
                          />
                        )}
                      </ApolloConsumer>
                    </div>
                    <Divider />

                    <div className={classes.inputGroup}>
                      {/* Password */}
                      <TextField
                        error={!!password.error}
                        id="password"
                        type="password"
                        label="Password"
                        autoComplete="new-password"
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
                        error={!!confirmPassword.error}
                        id="confirmPassword"
                        type="password"
                        label="Confirm Password"
                        autoComplete="new-password"
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
                  Sign Up
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

export default withStyles(styles)(SignUpForm);
