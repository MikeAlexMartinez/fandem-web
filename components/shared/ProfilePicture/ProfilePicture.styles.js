export default function(theme) {
  return {
    container: {
      width: "calc(84px + 84px + 56px + 2px)",
      marginRight: theme.spacing.unit * 2,
      borderRadius: "10px",
      backgroundColor: theme.palette.grey["400"],
      overflow: "hidden"
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "175px",
      overflow: "hidden",
      objectFit: "cover"
    },
    photo: {
      height: "175px",
      width: "auto"
    }
  };
}
