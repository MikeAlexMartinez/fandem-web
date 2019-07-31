import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/with-apollo';
import muiTheme from '../styles/mui-theme';

class MyApp extends App {
  // Special Next.js only lifecycle method which runs
  // before Component renders and exposes on props
  // anything that is returned
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // This exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  componentDidMount() {
    // remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Head>
            <title>fandem.10</title>
          </Head>
          <ThemeProvider
            theme={muiTheme}
          >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <CssBaseline />
              <Component {...pageProps} />
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
