import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import muiTheme from '../../styles/mui-theme';

const WithTheme = ({ children }) => (
  <ThemeProvider theme={muiTheme}>
    {children}
  </ThemeProvider>
);

export default WithTheme;
