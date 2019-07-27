export default function editFixtureStyles(theme) {
  const paddingSize = theme.spacing.unit * 3;
  return {
    container: {
      minHeight: '250px',
    },
    input: {
      display: 'none',
    },
    actions: {
      padding: `0 ${paddingSize}px ${paddingSize}px ${paddingSize}px`,
    },
    actionRoot: {
      margin: 0,
    },
  };
}
