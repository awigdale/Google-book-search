import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './client/App';
import { Router } from 'react-router-dom'
import history from './history'
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router history={history} >
    <App />
  </Router>,
  document.getElementById('root')
);


//serviceWorker.unregister();
