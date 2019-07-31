export default function (theme) {
  return {
    root: {
      width: '100%',
      padding: theme.spacing(2),
    },
    marginRight: {
      marginRight: theme.spacing(1),
    },
    paddingLeft: {
      paddingLeft: theme.spacing(1),
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  };
}
