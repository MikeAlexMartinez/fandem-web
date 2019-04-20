import { Query } from "react-apollo";
import { withStyles } from "@material-ui/core";

import { CURRENT_USER_QUERY } from "../../../db/queries/account.queries";

import Page from "../Page/Page";
import Background from "../Background/Background";
import SignInForm from "../SignInForm/SignInForm";

import styles from "./PleaseSignIn.styles";

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <Page>
            <Background>
              <div
                className={`${
                  props.classes.root
                } flex column jc-center ai-center`}
              >
                <SignInForm message="You must be signed in to view this page..." />
              </div>
            </Background>
          </Page>
        );
      }
      if (!data.me.emailValidated) {
        return <div>Please validate your email</div>;
      }
      return props.children;
    }}
  </Query>
);

export default withStyles(styles)(PleaseSignIn);
