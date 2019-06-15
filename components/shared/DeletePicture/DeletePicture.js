import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const DeletePicture = ({ classes }) => (
  <div className={classNames(classes.container, `flex row jc-sb ai-center`)} />
);

DeletePicture.propTypes = {
  classes: PropTypes.object
};

export default DeletePicture;
