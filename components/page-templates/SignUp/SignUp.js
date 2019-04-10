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

// Components
import Page from "../../shared/Page/Page";
import Background from "../../shared/Background/Background";

// Queries / Mutations
import { CREATE_USER_MUTATION } from "../../../db/mutations/account.mutations";

// styles
import styles from "./SignUp.styles";
import { EMAIL_EXISTS_QUERY } from "../../../db/queries/account.queries";

const startState = {
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

class SignUp extends Component {
  state = startState;

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

  render() {
    const {
      form: {
        isValid,
        fields: { email, name, password, confirmPassword }
      }
    } = this.state;
    const variables = {
      email: email.value,
      name: name.value,
      password: password.value
    };
    const { classes } = this.props;
    return (
      <Page>
        <Background>
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
                        <Typography
                          variant="h5"
                          className={`${classes.heading}`}
                        >
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
                        </div>
                        <Divider />

                        <div className={classes.inputGroup}>
                          {/* Password */}
                          <TextField
                            error={!!password.error}
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
                            error={!!confirmPassword.error}
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
        </Background>
      </Page>
    );
  }
}

export default withStyles(styles)(SignUp);
