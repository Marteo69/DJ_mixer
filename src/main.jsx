import './css/general.css';
import './css/variables.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from "react-router-dom";
import ThemeContextProvider from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </HashRouter>
  </StrictMode>,
)
