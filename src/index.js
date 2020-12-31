import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './components/Footer';
import { ProximoFeriado } from './components/ProximoFeriado';

ReactDOM.render(
  <React.StrictMode>
    <ProximoFeriado />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
