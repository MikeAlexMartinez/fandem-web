import React, { Component } from "react";
import Dashboard from "../components/page-templates/Dashboard/Dashboard";

const DashboardPage = ({ query: { emailToken } }) => (
  <div>
    <Dashboard token={emailToken || ""} />
  </div>
);

export default DashboardPage;
