import React from "react";
import UserProfile from "../components/page-templates/UserProfile/UserProfile";

const ProfilePage = ({ query: { displayName } }) => {
  return (
    <div>
      <UserProfile userName={displayName} />
    </div>
  );
};

export default ProfilePage;
