import preset from '@rebass/preset';
import merge from 'lodash.merge';
import prism from '@theme-ui/prism/presets/theme-ui';

export default merge(preset, {
  initialColorModeName: 'lite',
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#a0c',
    secondary: '#0ff',
    accent: '#f0b',
    muted: '#f6f6ff',
    gray: '#444',
    lightgray: '#cfcfd3',
    modes: {
      sorbet: {
        text: '#f8f8f2',
        background: '#44475a',
        primary: '#bd93f9',
        secondary: '#8be9fd',
        accent: '#ff79c6',
        muted: '#282a36',
        gray: '#50fa7b',
        lightgray: '#cfcfd3'
      },
      lite: {
        text: '#000',
        background: '#fff',
        primary: '#a0c',
        secondary: '#0ff',
        accent: '#f0b',
        muted: '#f6f6ff',
        gray: '#444',
        lightgray: '#cfcfd3'
      },
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0ff',
        secondary: '#b0f',
        accent: '#f0b',
        muted: '#111',
        gray: '#999',
        lightgray: '#444'
      }
    }
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700
  },
  sizes: {
    wide: 1280
  },
  shadows: {
    small: `0 0 0px 1px rgba(0, 0, 0, 0.25)`
  },
  buttons: {
    big: {
      variant: 'buttons.primary',
      px: 4,
      py: 3,
      fontSize: 3
    },
    outline: {
      variant: 'buttons.primary',
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    },
    transparent: {
      color: 'inherit',
      bg: 'transparent',
      ':hover,:focus': {
        color: 'primary',
        outline: 'none',
        boxShadow: '0 0 0 2px'
      }
    }
  },
  links: {
    nav: {
      display: 'block',
      px: 2,
      py: 1,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 1,
      fontWeight: 'normal'
    }
  },
  text: {
    heading: {
      a: {
        color: 'inherit',
        textDecoration: 'none',
        ':hover': {
          textDecoration: 'underline'
        }
      }
    }
  },
  variants: {
    badge: {
      display: 'inline-block',
      px: 2,
      color: 'background',
      bg: 'primary',
      borderRadius: 'circle'
    }
  },
  styles: {
    a: {
      color: 'primary',
      transition: 'color .2s ease-out',
      ':hover,:focus': {
        color: 'secondary'
      }
    },
    inlineCode: {
      fontFamily: 'monospace',
      fontSize: '93.75%',
      color: 'secondary'
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary'
    },
    pre: {
      ...prism,
      fontFamily: 'monospace',
      fontSize: 3,
      overflowX: 'auto',
      bg: 'muted',
      p: 3,
      borderRadius: 4
    },
    blockquote: {
      p: 0,
      mx: 0,
      fontWeight: 'bold',
      fontSize: 3
    },
    h1: {
      variant: 'text.heading',
      mt: 0,
      fontSize: [5, 6]
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, 5]
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: { variant: 'text.heading' },
    h5: { variant: 'text.heading' },
    h6: { variant: 'text.heading' },
    strong: {
      color: 'secondary'
    },
    em: {
      color: 'accent'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      py: 2,
      textAlign: 'left',
      borderBottom: t => `4px solid ${t.colors.muted}`
    },
    td: {
      py: 2,
      textAlign: 'left',
      borderBottom: t => `1px solid ${t.colors.muted}`
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    field: {
      borderColor: 'lightgray',
      ':focus': {
        borderColor: 'primary',
        outline: 'none',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`
      }
    },
    input: {
      variant: 'forms.field'
    },
    select: {
      variant: 'forms.field'
    },
    textarea: {
      variant: 'forms.field'
    },
    radio: {},
    slider: {
      bg: 'lightgray'
    },
    switch: {
      // thumb: {}
    }
  }
});
