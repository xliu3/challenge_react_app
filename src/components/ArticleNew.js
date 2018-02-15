import React, { Component } from 'react';
import { hashHistory, Link } from 'react-router';
import axios from 'axios';
import './App.css';

class ArticleNew extends Component{

  createNew(event){
    event.preventDefault();
    console.log(this);
    let title = this.refs.title.value;
    let author = this.refs.author.value;
    let description = this.refs.description.value;
    let tags = this.refs.tags.value;

    if (title === "" || author === "" || description === "" || tags === ""){
      console.log(`All fields need to be filled`);
    }else{
      let newArticle = {
        "title": title,
        "author": author,
        "description": description,
        "tags": tags
      };

      console.log(newArticle);
      axios.post('http://localhost:3000/api/v1/articles', newArticle, {
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
    return(
      <div>
        <h1>Create New Article</h1>
        <form>
          <div>
            <label htmlFor="title" className="inline-label">Title </label>
            <input id="title" type="text" ref="title" />
          </div>
          <div>
            <label htmlFor="author" className="inline-label">Author </label>
            <input id="author" type="text" ref="author" />
          </div>
          <div>
            <label htmlFor="description" className="inline-label">Description </label>
            <textarea id="description" ref="description" rows="3" cols="40"/>
          </div>
          <div>
            <label htmlFor="tags" className="inline-label">Tags </label>
            <input id="tags" type="text" ref="tags" />
          </div>
          <div>
            <button onClick={this.createNew.bind(this)}>Submit </button>
            <button><Link to="/">Home</Link></button>
          </div>
        </form>
      </div>
    )
  }
}

export default ArticleNew;
