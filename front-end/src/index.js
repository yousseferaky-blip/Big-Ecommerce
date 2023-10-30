import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './index.css';
import './css/component/button.css';
import './css/component/Err.css';
import './css/component/Loading.css';
import './pages/auth/Auth.css';
import './css/component/Google.css';
import 'bootstrap/dist/css/bootstrap.css'

import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
