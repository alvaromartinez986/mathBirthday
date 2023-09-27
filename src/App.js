import React from "react";
import Main from "./section/Main";
import { AppProvider } from "./context/AppContext";
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppProvider>
        <Main />
      </AppProvider>
    </ThemeProvider>

  );
}

export default App;
