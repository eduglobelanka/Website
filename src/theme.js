import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F4D37', // Refined emerald dark green
      light: '#1B6B4F',
      dark: '#082E21',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F59E0B', // Contemporary warm amber gold
      light: '#FBBF24',
      dark: '#D97706',
      contrastText: '#082E21',
    },
    background: {
      default: '#F8FAFC', // Contemporary subtle slate-white
      paper: '#ffffff',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.03em',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    button: {
      fontFamily: '"Outfit", "Poppins", sans-serif',
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280, // Modern golden standard container cap (prevents wide monitor overstretch)
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: '24px !important',
          paddingRight: '24px !important',
          '@media (min-width: 600px)': {
            paddingLeft: '36px !important',
            paddingRight: '36px !important',
          },
          '@media (min-width: 900px)': {
            paddingLeft: '48px !important',
            paddingRight: '48px !important',
          },
          '@media (min-width: 1280px)': {
            paddingLeft: '32px !important',
            paddingRight: '32px !important',
            maxWidth: '1240px !important', // Perfectly boxed width matching modern premium SaaS / agency sites
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999, // Smooth modern pill
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(15, 77, 55, 0.2)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #0F4D37 0%, #1B6B4F 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          '&:hover': {
            background: 'linear-gradient(135deg, #135A41 0%, #228462 100%)',
            boxShadow: '0 10px 28px rgba(15, 77, 55, 0.28)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
          color: '#082E21',
          fontWeight: 700,
          '&:hover': {
            background: 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
            boxShadow: '0 10px 28px rgba(245, 158, 11, 0.32)',
          },
        },
        outlined: {
          borderWidth: '1.5px',
          '&:hover': {
            borderWidth: '1.5px',
            backgroundColor: 'rgba(15, 77, 55, 0.04)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          border: '1px solid rgba(226, 232, 240, 0.8)',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
  },
});

export default theme;
