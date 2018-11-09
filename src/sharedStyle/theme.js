// import { responsiveColorPickerVariables } from 'sharedStyle/utils/responsiveShapes';
// import media from 'sharedStyle/utils/media';

const theme = {};

theme.colors = {
  primary: '#ba68c8',
  lightPrimary: '#f3e5f5',
  white: '#ffffff',
  lightGray: '#fafafa',
  mediumGray: '#9e9e9e',
  darkGray: '##424242',
  black: '#000000',
  red: '#d81b60',
  orange: '#fb8c00',
  yellow: '#fdd835',
  green: '#6dc113',
  blue: '#03a9f4',
  purple: '#9c27b0',
};

theme.typography = {
  fontFamily: `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
};

theme.spacers = {
  xs: '.25em',
  sm: '.5em',
  md: '1em',
  lg: '2em',
};

theme.mediaSizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

theme.pegSizesEm = {
  desktop: 3,
  tablet: 2.4,
  phone: 1.8,
};


export default theme;
