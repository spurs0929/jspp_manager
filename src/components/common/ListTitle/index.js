import React, { Component } from "react";
import './index.scss';

export default class ListTitle extends Component{
  render(){

    const { title, onRefreshData, refreshHide } = this.props;

    return (
      <div className="list-title">
        <h1 className="title">{ title }</h1>
        <span 
          className={ ['refresh-btn', refreshHide ? 'hide' : '' ].join(' ')}
          onClick={ () => onRefreshData() }>
          <i className="iconfont icon-refresh"></i>  
            刷新資料
          </span>
      </div>
    )
  }
}