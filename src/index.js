import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux';
import Routes from './routes/';
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
          <Routes />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

module.hot.accept();
