import React from 'react';;
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import MainRoute from './routes';

import theme from './styles/theme'

const App: React.FC = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>

      <CssBaseline />

      <MainRoute />

    </ThemeProvider>
  </React.Fragment>
)

export default App;
