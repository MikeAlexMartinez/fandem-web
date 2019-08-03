export default function (theme) {
  const paddingSize = theme.spacing(3);
  return {
    container: {
      minHeight: '250px',
    },
    image: {
      margin: `${theme.spacing(1)}px auto`,
      maxHeight: '180px',
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
