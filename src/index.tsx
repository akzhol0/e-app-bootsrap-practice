import React from 'react';
import './css/main.min.css';
import ReactDOM from 'react-dom/client';
import WebRouter from './WebRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <WebRouter />
);

