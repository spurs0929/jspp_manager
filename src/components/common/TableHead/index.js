import React, { Component } from 'react';

import './index.scss';

export default class TableHead extends Component{
  render(){
    
    const { thData } = this.props;
    
    return (
      <thead>
        <tr>
          {
            thData.map((item, index) => {
              return (
                <th key={ index }>{ item }</th>
              )
            })
          }
        </tr>
      </thead>
    )
  }
}