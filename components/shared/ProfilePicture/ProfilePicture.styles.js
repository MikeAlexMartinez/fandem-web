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
      maxHeight: "175px",
      overflow: "hidden"
    },
    photo: {
      margin: "auto",
      width: "100%",
      objectFit: "cover",
      "line-height": "200px",
      textAlign: "center"
    }
  };
}
