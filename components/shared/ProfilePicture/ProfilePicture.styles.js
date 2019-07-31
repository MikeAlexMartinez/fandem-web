export default function (theme) {
  return {
    container: {
      width: 'calc(84px + 84px + 56px + 2px)',
      marginRight: theme.spacing(2),
      borderRadius: '10px',
      backgroundColor: theme.palette.grey['400'],
      overflow: 'hidden',
    },
    imageContainer: {
      height: '175px',
      width: '190px',
    },
    photo: {
      height: '175px',
      width: '100%',
      'object-fit': 'cover',
    },
  };
}
