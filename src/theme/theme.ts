import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4CAF50',
      light: '#81C784',
      dark: '#388E3C'
    },
    secondary: {
      main: '#66BB6A',
      light: '#A5D6A7',
      dark: '#2E7D32'
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    }
  }
});

const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#81C784',
      light: '#A5D6A7',
      dark: '#4CAF50'
    },
    secondary: {
      main: '#A5D6A7',
      light: '#C8E6C9',
      dark: '#66BB6A'
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E'
    }
  }
});

export { lightTheme, darkTheme };