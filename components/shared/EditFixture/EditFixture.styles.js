export default function editFixtureStyles(theme) {
  const paddingSize = theme.spacing.unit * 3;
  return {
    container: {
      minHeight: '250px',
    },
    formRow: {
      display: 'grid',
      gridGap: '0.2em',
      gridTemplateColumns: '1fr 100px',
      marginBottom: '0.2em',
    },
    thinInput: {
      width: '50px',
    },
    inputOverride: {
      'text-align': 'center',
    },
    actions: {
      padding: `0 ${paddingSize}px ${paddingSize}px ${paddingSize}px`,
    },
    actionRoot: {
      margin: 0,
    },
  };
}
