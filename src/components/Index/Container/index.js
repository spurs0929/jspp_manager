import React, { Component } from 'react';

import './index.scss';
import { Board } from './Board';

export default class Container extends Component{
  render(){

    const { children } = this.props;

    return (
      <div className='board-container'>
        <Board
          children={ children }
        />
      </div>
    )
  }
}