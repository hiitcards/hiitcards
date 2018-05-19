import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import NoSleep from "../node_modules/nosleep.js/dist/NoSleep.min.js"
import {BrowserRouter} from "react-router-dom";

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))

registerServiceWorker();
document.noSleep = new NoSleep()
