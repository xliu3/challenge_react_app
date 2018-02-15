import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArticleList from './ArticleList';
import { hashHistory } from 'react-router';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/articles')
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  onClickCreateNew(){
    hashHistory.push({pathname: `/new/article`, data: this.state.items});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Challenge App</h1>
        </header>
        <p className="App-intro">
          Articles Table.
        </p>
        <button onClick={this.onClickCreateNew.bind(this)}>Create </button>
        <ArticleList key={this.state.items.id} data={this.state.items}/>
      </div>


    );
  }
}

export default App;
