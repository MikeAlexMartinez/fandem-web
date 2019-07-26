export default function () {
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
