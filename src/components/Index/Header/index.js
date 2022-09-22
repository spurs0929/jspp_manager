import React, { Component } from 'react';

import HeaderLogo from './Logo';
import HeaderTitle from './Title';
import HeaderLogout from './Logout';

import './index.scss';


export default class Header extends Component{
  render(){
    const { history } = this.props;
    
    return (
      <header className="header">
        <HeaderLogo />
        <HeaderTitle />
        <HeaderLogout history={ history } />
      </header>
    )
  }
}