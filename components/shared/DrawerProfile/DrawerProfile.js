import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import CurrentUser from "../CurrentUser";

const DrawerProfile = ({ classes }) => (
  <CurrentUser>
    {({ data: { currentUser }, loading, error }) => {
      console.log(currentUser);
      return (
        <div className={classNames(classes.userProfile)}>
          <div>User Profile</div>
        </div>
      );
    }}
  </CurrentUser>
);

DrawerProfile.propTypes = {
  classes: PropTypes.object
};

export default DrawerProfile;
