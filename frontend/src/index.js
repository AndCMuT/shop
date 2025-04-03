import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Strick mode помогает выявить ошибки во время разработки
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
