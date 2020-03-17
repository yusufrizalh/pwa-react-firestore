import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import * as serviceWorker from './serviceWorker'; 

import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit'; 

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
      </div>
    </Router>,
    document.getElementById('root')
);

// serviceWorker.register();