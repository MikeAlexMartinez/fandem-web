export default function (theme) {
  return {
    wrapper: {
      padding: '0 1em 0.5em 1em',
      width: '100%',
    },
    fixtureGrid: {
      display: 'grid',
      gridGap: '2em',
      width: '100%',
    },
    fixture: {
      height: '60px',
      width: '100%',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      borderRight: `2px solid ${theme.palette.primary.main}`,
      boxShadow: `2px 2px 0 0 ${theme.palette.secondary.main}`,
      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      '&:hover': {
        transform: 'translate3d(-4px, -4px, 0)',
        boxShadow: `6px 6px 0 0 ${theme.palette.secondary.main}`,
      },
    },
    '@media only screen and (min-width: 900px)': {
      fixtureGrid: {
        display: 'grid',
        gridGap: '1em',
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    '@media only screen and (min-width: 1500px)': {
      fixtureGrid: {
        display: 'grid',
        gridGap: '1em',
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
  };
}
