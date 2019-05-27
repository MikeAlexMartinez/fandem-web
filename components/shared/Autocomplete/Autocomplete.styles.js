export default function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    input: {
      display: "flex",
      padding: 0
    },
    valueContainer: {
      display: "flex",
      flexWrap: "wrap",
      flex: 1,
      opacity: 1,
      alignItems: "center",
      overflow: "hidden",
      padding: theme.spacing.unit * 2
    },
    noOptionsMessage: {
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
    },
    singleValue: {
      fontSize: 16
    },
    // placeholder: {
    //   position: "absolute",
    //   paddingLeft: 2,
    //   fontSize: 16
    // },
    paper: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing.unit,
      left: 0,
      right: 0
    },
    divider: {
      height: theme.spacing.unit * 2
    }
  };
}
