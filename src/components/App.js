import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ArticleList from './ArticleList';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Challenge App</h1>
        </header>
        <p className="App-intro">
          Articles Table.
        </p>
        <ArticleList key={this.state.items.id} data={this.state.items}/>
      </div>


    );
  }
}

export default App;
