import React from "react";
import Validate from "../components/page-templates/Validate/Validate";

const ValidatePage = ({ query }) => (
  <div>
    <Validate token={query.emailValidationToken || ""} />
  </div>
);

export default ValidatePage;
