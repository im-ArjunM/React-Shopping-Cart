import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../src/fonts/poppins/Poppins-Bold.ttf';
import '../src/fonts/poppins/Poppins-SemiBold.ttf';
import '../src/fonts/poppins/Poppins-Medium.ttf';
import '../src/fonts/poppins/Poppins-Regular.ttf';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
