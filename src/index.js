import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createTheme,
  ThemeProvider
} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '89Speed, LCDPHONE, Arial',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#6d481c',
    },
    secondary: {
      main: '#16050d',
    },
    error: {
      main: '#9a0f00',
    },
    background: {
      paper: '#232222',
      default: '#121111',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
