import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Mutation, ApolloConsumer } from "react-apollo";
import { Typography, withStyles, Divider, TextField } from "@material-ui/core";

import Title from "../Title/Title";
import Autocomplete from "../Autocomplete/Autocomplete";

import validateDisplayName from "../../../utils/validators/display-name";
import validateForm from "../../../utils/validators/form";

import { DISPLAY_NAME_EXISTS_QUERY } from "../../../db/queries/account.queries";

import styles from "./EditProfileForm.styles";

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = {
      form: {
        fields: {
          name: {
            valid: true,
            value: user.data.currentUser.name,
            checking: false,
            touched: false,
            required: true,
            error: "",
            errorMessages: {
              required: "A Name is Required"
            },
            label: "Name"
          },
          displayName: {
            startValue: user.data.currentUser.displayName,
            validator: validateDisplayName(40),
            valid: true,
            value: user.data.currentUser.displayName,
            checking: false,
            touched: false,
            required: true,
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
          isPrivate: {
            valid: true,
            value: user.data.currentUser.isPrivate,
            checking: false,
            touched: false,
            required: true,
            error: "",
            errorMessages: {
              required: "A Display Name is Required"
            },
            label: "Display Name"
          },
          country: {
            valid: true,
            value: user.data.currentUser.country || "",
            touched: false,
            required: false,
            label: "Country"
          },
          favoriteTeam: {
            valid: true,
            value: user.data.currentUser.favoriteTeam || "",
            touched: false,
            required: false,
            label: "Favourite Team"
          }
        },
        isValid: true
      }
    };
  }

  fetchError = id => {
    const field = this.state.form.fields[id];
    const { error, errorMessages } = field;
    return error && errorMessages.hasOwnProperty(error)
      ? errorMessages[error]
      : " ";
  };

  handleAutoComplete = (id, value) => {
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

  handleDisplayNameChange = async ({ event, client }) => {
    const { id } = event.target;
    const updatedField = this.handleChange(event, true);
    if (updatedField.startValue !== updatedField.value && updatedField.valid) {
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
    const { classes, user, countries, teams } = this.props;
    const {
      form: {
        isValid,
        fields: { name, displayName, isPrivate, country, favoriteTeam }
      }
    } = this.state;
    // photo
    // Form
    // displayName
    // name
    // isPrivate
    // country
    // favouriteTeam
    return (
      <div className={classNames(classes.root)}>
        <Title title={"Edit Profile"} />
        {/* 
          * Photo  DisplayName isPrivate
                   Name
        */}
        <div className={classNames(classes.toprow, "flex row jc-start")}>
          <div className={classNames(classes.photo)}>Photo</div>
          <div
            className={classNames(
              classes.names,
              classes.fullrow,
              "flex column jc-sb ai-center"
            )}
          >
            <div
              className={classNames(
                classes.public,
                classes.fullrow,
                "flex row jc-sb ai-start"
              )}
            >
              <div
                className={classNames(classes.displayname, classes.spaceright)}
              >
                <ApolloConsumer>
                  {client => (
                    <TextField
                      error={!!displayName.error}
                      id="displayName"
                      type="text"
                      label="Display Name"
                      value={displayName.value}
                      placeholder="Please enter a Display Name"
                      className={classes.textfield}
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
              <div className={classNames(classes.isprivate)}>Is Private</div>
            </div>
            <div
              className={classNames(
                classes.name,
                classes.fullrow,
                "flex row jc-start ai-end"
              )}
            >
              <TextField
                error={!!name.error}
                id="name"
                type="text"
                label="Name"
                placeholder="Please enter your Name"
                className={classes.textfield}
                value={name.value}
                margin="normal"
                variant="outlined"
                helperText={this.fetchError("name")}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
            </div>
            <div
              className={classNames(
                classes.fullrow,
                `flex row jc-start ai-end`
              )}
            >
              <div
                className={classNames(
                  classes.country,
                  classes.fullrow,
                  classes.paddingright,
                  "flex row jc-start ai-end"
                )}
              >
                <div className={classNames(classes.fullrow)}>
                  <Autocomplete
                    list={countries.data.countries}
                    handleChange={value =>
                      this.handleAutoComplete("country", value)
                    }
                    placeholder="Select a country..."
                    label="Country"
                  />
                </div>
              </div>
              <div
                className={classNames(
                  classes.team,
                  classes.fullrow,
                  "flex row jc-start ai-end"
                )}
              >
                <Autocomplete
                  list={teams.data.teams}
                  handleChange={value =>
                    this.handleAutoComplete("favoriteTeam", value)
                  }
                  placeholder="Select a Team..."
                  label="Favourite Team"
                />
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    );
  }
}

EditProfileForm.propTypes = {
  user: PropTypes.object.isRequired,
  countries: PropTypes.object.isRequired,
  teams: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfileForm);
