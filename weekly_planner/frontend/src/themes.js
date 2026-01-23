import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Old Standard TT", serif',
  },
  palette: {
    primary: {
      main: '#191970',
    },
    secondary: {
      main: '#A5D6A7',
    },
    background: {
      default: '#4682B4',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B2DFDB',
    },
  },
});

export default theme;
