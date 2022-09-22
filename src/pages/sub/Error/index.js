import React, { Component } from "react";

import './index.scss';

export default class Error extends Component{
  render(){
    return (
      <div className="error-wrapper">
        <div className="inner">
          <h1>404</h1>
          <p>未找到頁面</p>
        </div>
      </div>
    )
  }
}