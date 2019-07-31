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
    inputGroup: {
      paddingTop: "10px",
      paddingBottom: "10px"
    },
    heading: {
      "margin-top": "10px",
      "margin-bottom": "10px"
    },
    buttons: {
      "margin-right": "15px",
      "&:last-child": {
        "margin-right": "0px"
      }
    },
    paper: {
      ...theme.mixins.gutters(),
      width: "400px",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2)
    },
    textField: {
      width: "100%",
      marginBottom: "0px"
    },
    fieldset: {
      border: "none"
    }
  };
}
