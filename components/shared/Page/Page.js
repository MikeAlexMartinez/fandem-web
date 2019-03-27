import React from "react";
import { withStyles } from "@material-ui/core";
import globalStyles from "../../../styles/global";

const Page = props => {
  return <div>{props.children}</div>;
};

export default withStyles(globalStyles)(Page);
