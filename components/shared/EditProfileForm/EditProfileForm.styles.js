export default function(theme) {
  console.log(theme);
  return {
    root: {
      width: "100%",
      "@media (orientation: landscape)": {
        height: `calc(100vh - 48px - (${theme.spacing.unit}px * 3 * 2))`
      },
      [theme.breakpoints.up("sm")]: {
        height: `calc(100vh - 64px - (${theme.spacing.unit}px * 3 * 2))`
      },
      [theme.breakpoints.down("xs")]: {
        height: `calc(100vh - 54px - (${theme.spacing.unit}px * 3 * 2))`
      }
    },
    toprow: {
      margin: theme.spacing.unit * 2
    },
    photo: {
      height: "200px",
      minWidth: "200px",
      borderRadius: "10px",
      marginRight: theme.spacing.unit * 2,
      backgroundColor: theme.palette.grey["400"],
      "line-height": "200px",
      textAlign: "center"
    },
    fullrow: {
      width: "100%"
    },
    spaceright: {
      marginRight: "20px"
    },
    names: {
      "&:children": {
        marginBottom: "20px"
      },
      "&:last-child": {
        marginBottom: "0px"
      }
    },
    name: {},
    isprivate: {
      flex: "1 0 calc(300px)"
    },
    displayname: {
      flex: "4 0 calc(300px)"
    },
    country: {
      flex: "1 0 calc(50%)"
    },
    team: {
      flex: "1 0 calc(50%)"
    },
    textfield: {
      width: "100%",
      marginTop: "0"
    }
  };
}
