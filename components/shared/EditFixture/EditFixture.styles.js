export default function editFixtureStyles(theme) {
  const paddingSize = theme.spacing(3);
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
    kickoffContainer: {
      padding: '0.5em 0',
    },
    selectGameweekContainer: {
      minHeight: '60px',
      width: '100%',
      padding: '0.5em 0',
    },
    kickoffTime: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
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
