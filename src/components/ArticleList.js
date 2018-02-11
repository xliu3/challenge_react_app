import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { Link, hashHistory } from 'react-router';
import './ArticleList.css'

class ArticleList extends Component {
  onClickDetailSelected(cell, row, rowIndex){
    //<Link to={`/articles/${this.props.data.id}`} params={this.props.data}>React</Link>;
     //window.location.assign(`/articles/${row.id}`, row);
     var data = JSON.stringify(row);
     hashHistory.push({pathname: `/articles/${row.id}`, query: {data}});

  }

  cellButton(cell, row, enumObject, rowIndex) {
    return (
      <div>
         <button
            type="button"
            onClick={() =>
            this.onClickDetailSelected(cell, row, rowIndex)}
         >
         Detail
         </button>
       </div>
    )
  }
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} striped hover>
          <TableHeaderColumn isKey dataField='id'>Id</TableHeaderColumn>
          <TableHeaderColumn dataField='title'>Title</TableHeaderColumn>
          <TableHeaderColumn dataField='author'>Author</TableHeaderColumn>
          <TableHeaderColumn dataField='tags'>Tags</TableHeaderColumn>
          <TableHeaderColumn dataField='button' dataFormat={this.cellButton.bind(this)}>Action</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default ArticleList;
