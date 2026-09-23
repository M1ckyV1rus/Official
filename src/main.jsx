import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

window.__VITE_REACT_ENTRY__ = true;
window.React = React;
window.ReactDOM = ReactDOM;

const root = ReactDOM.createRoot(document.getElementById('root'));

import('./App.jsx').then(() => {
  root.render(
    <React.StrictMode>
      <window.PrimeBookApp />
    </React.StrictMode>,
  );
});
