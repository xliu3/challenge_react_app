import React, { Component } from 'react';

class ArticleView extends Component{

  render(){
    const article = JSON.parse(this.props.location.query.data)
    console.log(article);
    return(
      <div>
        <h1>{article.title}</h1>
        <detail>
          <strong>Author</strong>
          <p>{article.author}</p>
        </detail>
        <detail>
          <strong>Tags</strong>
          <p>{article.tags}</p>
        </detail>
        <detail>
          <strong>Description</strong>
          <p>{article.description}</p>
        </detail>
        <detail>
          <strong>Created At</strong>
          <p>{article.created_at}</p>
        </detail>
        <detail>
          <strong>Updated At</strong>
          <p>{article.updated_at}</p>
        </detail>
        <a href="/" class="active">Home</a>
      </div>

    );
  }
}

export default ArticleView;
