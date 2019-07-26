export default function (theme) {
  return {
    container: {
      height: '60px',
      backgroundColor: theme.palette.secondary.light,
      borderRadiusBottomLeft: '10px',
      borderRadiusBottomRight: '10px',
    },
    icon: {
      color: theme.palette.grey[50],
    },
    hideIcon: {
      color: theme.palette.secondary.light,
    },
  };
}
