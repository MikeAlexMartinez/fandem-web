import React, { Component } from "react";
import Downshift from "downshift";
import { Paper, withStyles } from "@material-ui/core";
import styles from "./Autocomplete.styles";
import getSuggestions from "./getSuggestions";
import renderInput from "./RenderInput";
import renderSuggestion from "./RenderSuggestion";

class Autocomplete extends Component {
  render() {
    const { classes, list, placeholder, label, handleChange } = this.props;
    return (
      <Downshift onChange={selectedItem => handleChange(selectedItem)}>
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem
        }) => {
          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputProps: getInputProps({
                  placeholder,
                  label
                })
              })}
              <div {...getMenuProps()}>
                {isOpen && (
                  <Paper className={classes.paper} square>
                    {getSuggestions({ inputValue, list }).map(
                      (listItem, index) =>
                        renderSuggestion({
                          listItem,
                          index,
                          itemProps: getItemProps({ item: listItem.label }),
                          highlightedIndex,
                          selectedItem
                        })
                    )}
                  </Paper>
                )}
              </div>
            </div>
          );
        }}
      </Downshift>
    );
  }
}

export default withStyles(styles)(Autocomplete);
