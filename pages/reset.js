import React from "react";
import Reset from "../components/page-templates/Reset/Reset";

const ResetPage = ({ query }) => (
  <div>
    <Reset token={query.resetToken || ""} />
  </div>
);

export default ResetPage;
