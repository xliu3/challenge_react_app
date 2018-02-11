import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { hashHistory } from 'react-router';
import './ArticleList.css'

class ArticleList extends Component {
  onClickDetailSelected(cell, row, rowIndex){
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
