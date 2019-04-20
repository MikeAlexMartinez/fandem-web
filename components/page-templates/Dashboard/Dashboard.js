import { withStyles } from "@material-ui/core";
import Navigation from "../../shared/Navigation/Navigation";

import Page from "../../shared/Page/Page";
import PleaseSignIn from "../../shared/PleaseSignIn/PleaseSignIn";

import styles from "./Dashboard.styles";

const Dashboard = props => (
  <Page>
    <PleaseSignIn>
      <Navigation>This is The Dashboard!</Navigation>
    </PleaseSignIn>
  </Page>
);

export default withStyles(styles)(Dashboard);
