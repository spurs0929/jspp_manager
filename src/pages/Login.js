import React, { Component } from 'react';

import Login from '../components/Login/index';

export default class LoginPage extends Component{
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){

    const { history } = this.props;

    return (
      <div className='container'>
        <Login history={ history } />
      </div>
    )
  }
}