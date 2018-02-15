import React, { Component } from 'react';
import './App.css';
import { hashHistory, Link } from 'react-router';
import axios from 'axios';

class ArticleEdit extends Component{

  editArticle(event){
    event.preventDefault();
    console.log(this);
    let title = this.refs.title.value;
    let author = this.refs.author.value;
    let description = this.refs.description.value;
    let tags = this.refs.tags.value;

    if (title === "" || author === "" || description === "" || tags === ""){
      console.log(`All fields need to be filled`);
    }else{
      let editedArticle = {
        "title": title,
        "author": author,
        "description": description,
        "tags": tags
      };

      console.log(editedArticle);
      axios.put(`http://localhost:3000/api/v1/articles/${this.props.routeParams.id}`, editedArticle, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => {
          console.log(res)
          console.log('it works')
          hashHistory.push({pathname:'/'});
      })
      .catch(function (error) {
          console.log(error);
      });
    }

  }

  render(){
    const article = JSON.parse(this.props.location.query.data)
    return(
      <div>
        <h1>Edit Article</h1>
        <form>
          <div>
            <label htmlFor="title" className="inline-label">Title </label>
            <input id ="title" type="text" ref="title" defaultValue={article.title}/>
          </div>
          <div>
            <label htmlFor="author" className="inline-label">Author </label>
            <input id="author" type="text" ref="author" defaultValue={article.author}/>
          </div>
          <div>
            <label htmlFor="description" className="inline-label">Description </label>
            <textarea id="description" ref="description" rows="3" cols="40" defaultValue={article.description}/>
          </div>
          <div>
            <label htmlFor="tags" className="inline-label">Tags </label>
            <input id = "tags" type="text" ref="tags" defaultValue={article.tags}/>
          </div>
          <div>
            <button onClick={this.editArticle.bind(this)}>Submit </button>
            <button><Link to="/">Home</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default ArticleEdit;
