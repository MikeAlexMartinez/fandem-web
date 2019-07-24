const globalStyles = () => ({
  '@global': {
    a: {
      textDecoration: 'none',
      color: 'inherit',
    },
    '.text-center': {
      'text-align': 'center',
    },
    '.hover-link': {
      position: 'relative',
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '2px',
        backgroundColor: '#1f1693',
        bottom: '-4px',
        left: 0,
        visibility: 'hidden',
        transform: 'scaleX(0)',
        transition: 'all 0.12s ease-in-out 0s',
      },
      '&:hover': {
        color: '#1f1693',
        '&:before': {
          visibility: 'visible',
          transform: 'scaleX(1)',
        },
      },
    },
    '.flex': {
      display: 'flex',
      '&.column': {
        'flex-direction': 'column',
      },
      '&.row': {
        'flex-direction': 'row',
      },
      '&.jc-start': {
        'justify-content': 'flex-start',
      },
      '&.jc-sb': {
        'justify-content': 'space-between',
      },
      '&.jc-end': {
        'justify-content': 'flex-end',
      },
      '&.jc-sa': {
        'justify-content': 'space-around',
      },
      '&.jc-center': {
        'justify-content': 'center',
      },
      '&.jc-evenly': {
        'justify-content': 'space-evenly',
      },
      '&.ai-start': {
        'align-items': 'flex-start',
      },
      '&.ai-sb': {
        'align-items': 'space-between',
      },
      '&.ai-end': {
        'align-items': 'flex-end',
      },
      '&.ai-sa': {
        'align-items': 'space-around',
      },
      '&.ai-center': {
        'align-items': 'center',
      },
      '&.ai-stretch': {
        'align-items': 'stretch',
      },
    },
    fieldset: {
      border: 'none',
      'margin-inline-start': '0',
      'margin-inline-end': '0',
      'padding-block-start': '0',
      'padding-inline-start': '0',
      'padding-inline-end': '0',
      'padding-block-end': '0',
    },
  },
});

export default globalStyles;
