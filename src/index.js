import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import ArticleView from './components/ArticleView';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='Articles/:id' component={ArticleView} />
  </Router>,
  document.getElementById('root')
)
