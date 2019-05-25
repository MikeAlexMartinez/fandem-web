import React, { Component } from "react";
import Downshift from "downshift";
import { Paper, withStyles } from "@material-ui/core";
import styles from "./Autocomplete.styles";
import getSuggestions from "./getSuggestions";
import renderInput from "./RenderInput";
import renderSuggestion from "./RenderSuggestion";

import itemToString from "./itemToString";

class Autocomplete extends Component {
  render() {
    const {
      classes,
      list,
      placeholder,
      label,
      handleChange,
      initialValue
    } = this.props;
    return (
      <Downshift
        id={`downshift-${label}`}
        onChange={selectedItem => handleChange(selectedItem)}
        itemToString={itemToString}
        initialSelectedItem={initialValue}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          getLabelProps,
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
                          labelProps: getLabelProps(),
                          itemProps: getItemProps({
                            item: listItem,
                            index: listItem.id
                          }),
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
