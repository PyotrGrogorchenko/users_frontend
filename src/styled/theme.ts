const palette = {
  primary: '#333333',
  secondary: '#ffffff',
  tertiary: '#999999',
  common: '#FF9011',
  shadow: '#e6e6e6',
  error: '#ed4b48',
  warning: '#ffb400',
  success: '#26b47f',
  dark: '#333333',
  light: '#ffffff'
}

const text = {
  l: '20px',
  m: '15px',
  s: '10px'
}

const indent = {
  s: '3px',
  m: '6px',
  l: '9px',
  xl: '12px',
  xxl: '15px',
  xxxl: '18px'
}

const ui = {
  s: '15px',
  m: '20px',
  l: '25px'
}

const breakpoints = {
  mobileLandscape: '576px',
  tabletPortrait: '768px',
  tabletLandscape: '992px',
  laptop: '1200px',
  desktop: '1400px'
}

const mixins = {
  fontFamily: 'font-family: \'Roboto\', sans-serif;'
}

export const theme = {
  palette,
  sizing: {
    text,
    ui,
    indent
  },
  breakpoints,
  mixins
}

