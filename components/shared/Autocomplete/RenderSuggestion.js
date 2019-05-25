import React from "react";
import PropTypes from "prop-types";

import { MenuItem } from "@material-ui/core";

import itemToString from "./itemToString";

const RenderSuggestion = ({
  listItem,
  index,
  labelProps,
  itemProps,
  highlightedIndex,
  selectedItem
}) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === listItem.label;

  return (
    <MenuItem
      {...labelProps}
      {...itemProps}
      key={listItem.id}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {itemToString(listItem)}
    </MenuItem>
  );
};

RenderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  listItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired
};

export default RenderSuggestion;
