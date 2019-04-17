import { Query } from "react-apollo";
import { CURRENT_USER_QUERY } from "../../../db/queries/account.queries";

import Page from "../Page/Page";
import Background from "../Background/Background";
import SignInForm from "../SignInForm/SignInForm";

const PleaseSignIn = props => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <Page>
            <Background>
              <SignInForm message="Please sign in..." />
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

export default PleaseSignIn;
