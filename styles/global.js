const globalStyles = theme => ({
  "@global": {
    a: {
      textDecoration: "none",
      color: "inherit"
    },
    ".flex": {
      display: "flex",
      "&.column": {
        "flex-direction": "column"
      },
      "&.row": {
        "flex-direction": "row"
      },
      "&.jc-sb": {
        "justify-content": "space-between"
      },
      "&.jc-end": {
        "justify-content": "flex-end"
      },
      "&.jc-sa": {
        "justify-content": "space-around"
      },
      "&.jc-center": {
        "justify-content": "center"
      },
      "&.ai-sb": {
        "align-items": "space-between"
      },
      "&.ai-end": {
        "align-items": "flex-end"
      },
      "&.ai-sa": {
        "align-items": "space-around"
      },
      "&.ai-center": {
        "align-items": "center"
      },
      "&.ai-stretch": {
        "align-items": "stretch"
      }
    }
  }
});

export default globalStyles;
