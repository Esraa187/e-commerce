import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </HashRouter>
  </StrictMode>,
)
