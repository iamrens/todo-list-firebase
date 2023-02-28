import { createTheme, ThemeProvider } from '@mui/material/styles';
import Tasks from './component/Tasks';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    }
  },
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Tasks />
        </ThemeProvider>
    </div>
  );
}

export default App;
