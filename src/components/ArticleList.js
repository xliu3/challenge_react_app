import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { hashHistory } from 'react-router';
import axios from 'axios';
import './ArticleList.css'

class ArticleList extends Component {
  onClickDetailSelected(cell, row, rowIndex){
     var data = JSON.stringify(row);
     hashHistory.push({pathname: `/articles/${row.id}`, query: {data}});

  }

  onClickEditSelected(cell, row, rowIndex){
    var data = JSON.stringify(row);
    hashHistory.push({pathname: `/edit/article/${row.id}`, query: {data}});
  }

  onClickDeleteSelected(cell, row, rowIndex){
    axios.delete(`http://localhost:3000/api/v1/articles/${row.id}`)
        .then(res => {
            console.log(res)
            console.log('it works')
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });


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
         <button
            type="button"
            onClick={() =>
            this.onClickEditSelected(cell, row, rowIndex)}
         >
         Edit
         </button>
         <button
            type="button"
            onClick={() =>
            this.onClickDeleteSelected(cell, row, rowIndex)}
         >
         Delete
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
