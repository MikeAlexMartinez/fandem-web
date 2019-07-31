export default function (theme) {
  return {
    container: {
      padding: '20px',
      borderLeft: `5px solid ${theme.palette.error.main}`,
      marginBottom: '20px',
    },
    columnItem: {
      marginBottom: '10px',
      '&:last-child': {
        marginBottom: '0',
      },
    },
    icon: {
      marginRight: '10px',
      color: theme.palette.error.main,
    },
  };
}
