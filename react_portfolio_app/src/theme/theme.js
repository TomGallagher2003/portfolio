import { createTheme } from '@mui/material/styles';

// Design System Theme
// Based on design_system.md specifications
export const theme = createTheme({
  palette: {
    primary: {
      main: '#0066FF', // Electric Blue
      light: '#4D94FF',
      dark: '#0052CC',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#6B3FA0', // Vivid Purple
      light: '#8F66B8',
      dark: '#562F80',
      contrastText: '#FFFFFF',
    },
    neutral: {
      dark: '#1A1A1A',
      light: '#F5F5F5',
      main: '#757575',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#757575',
    },
    success: {
      main: '#4CAF50',
    },
    warning: {
      main: '#FF9800',
    },
    error: {
      main: '#F44336',
    },
  },

  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),

    // Display - Oversized, commanding presence
    display: {
      fontSize: '4.5rem', // 72px
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },

    // H1 - Hero headings
    h1: {
      fontSize: '3rem', // 48px
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },

    // H2 - Section headings
    h2: {
      fontSize: '2.25rem', // 36px
      fontWeight: 600,
      lineHeight: 1.2,
    },

    // H3 - Subsection headings
    h3: {
      fontSize: '1.5rem', // 24px
      fontWeight: 600,
      lineHeight: 1.3,
    },

    // H4 - Card titles
    h4: {
      fontSize: '1.25rem', // 20px
      fontWeight: 600,
      lineHeight: 1.4,
    },

    // H5
    h5: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      lineHeight: 1.4,
    },

    // H6
    h6: {
      fontSize: '1rem', // 16px
      fontWeight: 600,
      lineHeight: 1.5,
    },

    // Body Large
    bodyLarge: {
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      lineHeight: 1.6,
    },

    // Body (base)
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      lineHeight: 1.6,
    },

    // Body Small
    body2: {
      fontSize: '0.875rem', // 14px
      fontWeight: 400,
      lineHeight: 1.5,
    },

    // Caption
    caption: {
      fontSize: '0.75rem', // 12px
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },

  // Spacing Scale (8px base grid)
  spacing: 8,

  // Breakpoints
  breakpoints: {
    values: {
      xs: 0,      // Mobile start
      sm: 600,    // Tablet start (adjusted from 768 for MUI compatibility)
      md: 960,    // Desktop start (adjusted from 1024 for MUI compatibility)
      lg: 1280,   // Large desktop
      xl: 1920,   // Extra large
    },
  },

  // Shadow System
  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.05)',      // sm
    '0 2px 4px rgba(0,0,0,0.06)',
    '0 4px 6px rgba(0,0,0,0.1)',       // md
    '0 6px 8px rgba(0,0,0,0.1)',
    '0 8px 10px rgba(0,0,0,0.1)',
    '0 10px 15px rgba(0,0,0,0.1)',     // lg
    '0 12px 18px rgba(0,0,0,0.1)',
    '0 15px 20px rgba(0,0,0,0.1)',
    '0 18px 24px rgba(0,0,0,0.1)',
    '0 20px 25px rgba(0,0,0,0.1)',     // xl
    '0 22px 28px rgba(0,0,0,0.12)',
    '0 24px 30px rgba(0,0,0,0.12)',
    '0 25px 35px rgba(0,0,0,0.13)',
    '0 25px 40px rgba(0,0,0,0.14)',
    '0 25px 50px rgba(0,0,0,0.15)',    // 2xl
    '0 30px 60px rgba(0,0,0,0.16)',
    '0 35px 70px rgba(0,0,0,0.17)',
    '0 40px 80px rgba(0,0,0,0.18)',
    '0 45px 90px rgba(0,0,0,0.19)',
    '0 50px 100px rgba(0,0,0,0.20)',
    '0 55px 110px rgba(0,0,0,0.21)',
    '0 60px 120px rgba(0,0,0,0.22)',
    '0 65px 130px rgba(0,0,0,0.23)',
    '0 70px 140px rgba(0,0,0,0.24)',
  ],

  // Border Radius
  shape: {
    borderRadius: 8, // md - default
  },

  // Component Overrides
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 150ms cubic-bezier(0.33, 1, 0.68, 1)',
          '&:hover': {
            transform: 'scale(1.02)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        sizeLarge: {
          height: 48,
          fontSize: '1.125rem',
        },
        sizeMedium: {
          height: 40,
        },
        sizeSmall: {
          height: 32,
          fontSize: '0.875rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // lg
          transition: 'all 250ms cubic-bezier(0.33, 1, 0.68, 1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 150ms cubic-bezier(0.33, 1, 0.68, 1)',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '&:active': {
            transform: 'scale(0.95)',
          },
        },
      },
    },
  },
});

export default theme;
