import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#66ffa5',
      main: '#00e575',
      dark: '#00b147',
    },
    secondary: {
      light: '#5c41c5',
      main: '#1f1693',
      dark: '#000064',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default muiTheme;
