import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "../../../db/queries/account.queries";

const CurrentUser = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

CurrentUser.propTypes = {
  children: PropTypes.func.isRequired
};

export default CurrentUser;