export default function fixtureStyles(theme) {
  return {
    grow: {
      flex: '1 1 100%',
    },
    fixtureInfoGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 135px 1fr',
    },
    fixtureScoreGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    fixtureCentre: {
      margin: '0 0.2em',
    },
    controls: {
      padding: '0 0.2em',
    },
    teamScore: {
      margin: '0 0.4em 0 0.2em',
      backgroundColor: theme.palette.grey[100],
      boxShadow: `2px 2px 0 0 ${theme.palette.secondary.main}`,
    },
    kickoffTime: {
      textShadow: 'none',
      fontFamily: theme.typography.fontFamily,
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.grey[400],
      'text-align': 'center',
    },
    fixture: {
      width: '100%',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      borderRight: `2px solid ${theme.palette.primary.main}`,
      boxShadow: `2px 2px 0 0 ${theme.palette.secondary.main}`,
      transform: 'translate3d(0, 0, 0)',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      '&:hover': {
        transform: 'translate3d(-4px, -4px, 0)',
        boxShadow: `6px 6px 0 0 ${theme.palette.secondary.main}`,
      },
    },
  };
}
