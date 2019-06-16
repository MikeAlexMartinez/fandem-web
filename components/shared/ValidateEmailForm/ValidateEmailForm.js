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

import validateHexToken from "../../../utils/validators/hexToken";

import { SUBMIT_EMAIL_TOKEN_MUTATION } from "../../../db/mutations/account.mutations";

import styles from "./ValidateEmailForm.styles";

class ValidateEmailForm extends Component {
  constructor(props) {
    super(props);

    const token = props.token || "";
    const hexValidator = validateHexToken(20);
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
            label: "Email Validation Code"
          }
        },
        isValid: tokenError === null
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

  handleEmailValidation = async (validateEmail, token) => {
    try {
      const { data } = await validateEmail({
        variables: {
          emailValidationToken: token
        }
      });
      Router.push({
        pathname: "/dashboard",
        query: {
          emailValidated: true,
          message:
            (data && data.validateEmail && data.validateEmail.message) || ""
        }
      });
    } catch (e) {
      console.error(e);
      return;
    }
  };

  render() {
    const {
      form: { isValid, fields }
    } = this.state;
    const variables = {
      resetToken: fields.resetToken.value
    };
    const { classes, token } = this.props;
    return (
      <Mutation mutation={SUBMIT_EMAIL_TOKEN_MUTATION} variables={variables}>
        {(validateEmail, { data, error, loading }) => {
          return (
            <form
              method="POST"
              onSubmit={async e => {
                e.preventDefault();
                if (isValid) {
                  this.handleEmailValidation(
                    validateEmail,
                    fields.resetToken.value
                  );
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
                      Validate Your Email
                    </Typography>
                    <Divider />
                    <div className={classes.inputGroup}>
                      {/* Reset Token */}
                      <TextField
                        error={!!fields.resetToken.error}
                        id="resetToken"
                        type="text"
                        label="Reset Code"
                        value={token}
                        placeholder="Please enter your Reset Code"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        helperText={this.fetchError("resetToken")}
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
                  Submit Email Validation
                </Button>
              </div>
              <div className={classes.columnItem}>
                <Typography variant="body2" className="text-center">
                  <Link href="/signin">
                    <a className={`hover-link`}>
                      Sign in again to resend email validation token
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

export default withStyles(styles)(ValidateEmailForm);
