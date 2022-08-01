import { createTheme } from '@mui/material';
const customTheme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      main: '#1976d2',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    error: {
      main: '#c62828',
      contrastText: '#fff',
    },
    info: {
      main: '#01579b',
      contrastText: '#fff',
    },
    success: {
      main: '#1b5e20',
      contrastText: '#fff',
    },
    grey: {
      400: "#E4E5E8",
      600: "#424242",
      700: "#616161",
    }
  },
  typography: {
    fontFamily: 'Poppins',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1204,
      lg: 1440,
      xl: 1920,
    },
  },
});

export { customTheme }
