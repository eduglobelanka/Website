import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#125A41', // Deep rich green
      light: '#1e7f5e',
      dark: '#0a3626',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F4A522', // Vibrant gold/orange
      light: '#f7bd58',
      dark: '#c48013',
      contrastText: '#ffffff',
    },
    background: {
      default: '#Fcfcfc',
      paper: '#ffffff',
    },
    text: {
      primary: '#1A2b22',
      secondary: '#4A5D54',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      letterSpacing: '-1px',
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30, // Pill shaped buttons
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #125A41 30%, #1a8e64 90%)',
        },
        containedSecondary: {
          background: 'linear-gradient(45deg, #F4A522 30%, #fbd545 90%)',
          color: '#125A41', // Text color for secondary button
        }
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export default theme;
