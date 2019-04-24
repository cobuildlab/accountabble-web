//import packages
import React from 'react';
import ReactDOM from 'react-dom';

//import CSS
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//import components
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, 
document.getElementById('root'));
