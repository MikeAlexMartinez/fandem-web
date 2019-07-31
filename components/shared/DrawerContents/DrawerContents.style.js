export default function (theme) {
  return {
    drawerContainer: {
      height: '100%',
      flexGrow: 1,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    userProfile: {
      height: '250px',
      backgroundColor: theme.palette.secondary.light,
    },
  };
}
