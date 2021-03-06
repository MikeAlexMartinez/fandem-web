export default function (theme) {
  return {
    root: {
      width: '100%',
      '@media (orientation: landscape)': {
        height: `calc(100vh - 48px - (${theme.spacing(1)}px * 3 * 2))`,
      },
      [theme.breakpoints.up('sm')]: {
        height: `calc(100vh - 64px - (${theme.spacing(1)}px * 3 * 2))`,
      },
      [theme.breakpoints.down('xs')]: {
        height: `calc(100vh - 54px - (${theme.spacing(1)}px * 3 * 2))`,
      },
    },
    toprow: {
      margin: theme.spacing(2),
    },
    fullrow: {
      width: '100%',
    },
    spaceright: {
      marginRight: '20px',
    },
    paddingright: {
      paddingRight: '20px',
    },
    names: {
      '&:children': {
        marginBottom: '20px',
      },
      '&:last-child': {
        marginBottom: '0px',
      },
    },
    name: {},
    isprivate: {
      flex: '1 0 calc(300px)',
      paddingTop: '4px',
    },
    displayname: {
      flex: '4 0 calc(300px)',
    },
    country: {
      flex: '1 0 calc(50%)',
    },
    team: {
      flex: '1 0 calc(50%)',
    },
    textfield: {
      width: '100%',
      marginTop: '0',
    },
    button: {
      margin: theme.spacing(1),
    },
    btntext: {
      paddingLeft: '10px',
    },
  };
}
