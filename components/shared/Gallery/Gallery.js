import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Gallery = ({ classes }) => (
  <div className={classNames(classes.container, `flex row jc-sb ai-center`)} />
);

Gallery.propTypes = {
  classes: PropTypes.object
};

export default Gallery;
