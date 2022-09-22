import React, { Component } from 'react';
import './index.scss';
import Title from './Title';
import LoginForm from './LoginFrom';


export default class Form extends Component{
  render(){

    const { history } = this.props;

    return (
      <div className='form-wrapper'>
        <Title />
        <LoginForm history={ history } />
      </div>
    )
  }
}