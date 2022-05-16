import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
  txtColor: '#fff',
  bgColor: '#000'
}
const lightTheme = {
  txtColor: '#000',
  bgColor: '#fff'
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}> 
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
