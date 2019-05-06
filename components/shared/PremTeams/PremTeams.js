import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { PREM_TEAMS_QUERY } from "../../../db/queries/team.queries";

const PremTeams = props => (
  <Query {...props} query={PREM_TEAMS_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

PremTeams.propTypes = {
  children: PropTypes.func.isRequired
};

export default PremTeams;
