import React from "react";
import Reset from "../components/page-templates/Reset/Reset";

const ResetPage = ({ query: { resetToken } }) => (
  <div>
    <Reset token={resetToken || ""} />
  </div>
);

export default ResetPage;
