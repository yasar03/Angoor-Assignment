// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#6C757D',
    },
    background: {
      default: '#F8F9FA',
    },
    text: {
      primary: '#212529',
    },
  },
  typography: {
    fontWeightBold: 700, // Ensure this property is defined
  },
  spacing: factor => `${factor * 8}px`,
});

export default theme;
