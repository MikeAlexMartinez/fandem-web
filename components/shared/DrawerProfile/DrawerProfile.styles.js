export default function styles(theme) {
  return {
    spinnerContainer: {
      height: '250px',
      padding: '50px',
    },
    userProfile: {
      height: '250px',
      backgroundColor: theme.palette.secondary.light,
    },
    imgContainer: {
      overflow: 'hidden',
      height: '180px',
      width: '180px',
      backgroundColor: 'white',
      borderRadius: '0 50% 50% 0',
    },
    photo: {
      height: '180px',
      width: '100%',
      objectFit: 'cover',
    },
    greeting: {
      height: '70px',
    },
    greetingText: {
      fontSize: '1.5rem',
      color: theme.palette.grey[50],
    },
    actions: {
      padding: '1rem',
    },
  };
}
