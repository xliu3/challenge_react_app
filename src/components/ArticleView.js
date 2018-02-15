import React, { Component } from 'react';
import { Link } from 'react-router';

class ArticleView extends Component{

  render(){
    const article = JSON.parse(this.props.location.query.data)

    return(
      <div>
        <h1>{article.title}</h1>
        <div>
          <strong>Author</strong>
          <p>{article.author}</p>
        </div>
        <div>
          <strong>Tags</strong>
          <p>{article.tags}</p>
        </div>
        <div>
          <strong>Description</strong>
          <p>{article.description}</p>
        </div>
        <div>
          <strong>Created At</strong>
          <p>{article.created_at}</p>
        </div>
        <div>
          <strong>Updated At</strong>
          <p>{article.updated_at}</p>
        </div>
        <button><Link to="/">Home</Link></button>
      </div>

    );
  }
}

export default ArticleView;
