import React from "react";
import EditProfile from "../components/page-templates/EditProfile/EditProfile";

const UserProfilePage = ({ query: { displayName } }) => {
  return (
    <div>
      <EditProfile />
    </div>
  );
};

export default UserProfilePage;
