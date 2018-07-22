import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
  <BrowserRouter>
        <Routes />
  </BrowserRouter>
), document.getElementById('root'));

module.hot.accept();
