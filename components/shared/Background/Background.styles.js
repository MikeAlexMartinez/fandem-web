const backgroundShape = 'static/images/shape.svg';

export default function backgroundStyles(theme) {
  return {
    root: {
      minHeight: '100vh',
      width: '100vw',
      'overflow-y': 'hidden',
      backgroundColor: theme.palette.grey['100'],
      background: `url(${backgroundShape}) no-repeat`,
      backgroundSize: 'cover',
      backgroundPosition: '0 400px',
    },
  };
}
