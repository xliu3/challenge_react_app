import React from 'react';
import { Route, Router, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './components/App';
import ArticleView from './components/ArticleView';
import ArticleNew from './components/ArticleNew';
import ArticleEdit from './components/ArticleEdit';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/Articles/:id' component={ArticleView} />
    <Route path='/new/Article' component={ArticleNew} />
    <Route path='/edit/Article/:id' component={ArticleEdit} />
  </Router>,
  document.getElementById('root')
)
