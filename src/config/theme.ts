import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '14px',
        },
      },
    },
  },
});

export default theme;
