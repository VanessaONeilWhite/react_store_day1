import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    type: 'dark',
    primary: {
      main: '#e2eb98',
    },
    secondary: {
      main: '#9dc4b5',
    },
    info: {
      main: '#6c91c2',
    },
    success: {
      main: '#c3c9e9',
    },
    error: {
      main: '#414066',
    },
    warning: {
      main: '#d2d6ef',
    },
    background: {
      default: '#adbf97',
      paper: '#82816d',
    },
  },
};

const theme=createTheme(themeOptions);
export default theme