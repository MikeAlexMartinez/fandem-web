export default function autocompleteStyles(theme) {
  return {
    root: {
      flexGrow: 1,
    },
    input: {
      display: 'flex',
      padding: 0,
    },
    valueContainer: {
      display: 'flex',
      'flex-wrap': 'wrap',
      flex: 1,
      opacity: 1,
      alignItems: 'center',
      overflow: 'hidden',
      padding: theme.spacing(2),
    },
    noOptionsMessage: {
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
    singleValue: {
      fontSize: 16,
    },
    placeholder: {
      position: 'absolute',
      paddingLeft: 2,
      fontSize: 16,
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    divider: {
      height: theme.spacing(2),
    },
  };
}
