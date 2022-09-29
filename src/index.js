import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
    <Home/>
    </Provider>
  ,
  document.getElementById('root')
);

