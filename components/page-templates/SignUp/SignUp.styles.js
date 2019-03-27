export default function(theme) {
  return {
    root: {
      height: "100vh",
      width: "100vw"
    },
    columnItem: {
      "margin-bottom": "20px",
      "&:lastchild": {
        "margin-bottom": "0px"
      }
    },
    buttons: {
      "margin-right": "15px",
      "&:last-child": {
        "margin-right": "0px"
      }
    },
    paper: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2
    }
  };
}
