import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
