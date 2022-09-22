import React, { Component } from 'react';

import LoginService from 'services/Login';

import { trimSpace } from 'utils/tools';

import './index.scss';

const loginService = new LoginService();

export default class LoginForm extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  async loginCheck(){
    const result = await loginService.loginCheck();

    const errorCode = result.error_code;

    if(errorCode === 10007){
      const { history } = this.props;
      history.push('/'); 
    }
  }

  onInputTyping(e){
    const id = e.target.id,
          val = e.target.value;

    this.setState({
      [id]: val
    });  
  }

  async onLoginSubmit(e){
    const { username, password } = this.state;

    if(trimSpace(username).length <= 0){
      alert('管理者名稱長度錯誤');
      return;
    }

    if(trimSpace(password).length <= 0){
      alert('密碼長度錯誤');
      return;
    }

    const result = await loginService.loginAction({
      username: trimSpace(username),
      password: trimSpace(password)
    });

    const errorCode = result.error_code,
          errorMsg = result.error_msg;

    if(errorCode !== 0){
      alert(errorMsg + '(errorCode: '+ errorCode + ')');
      return;
    }      

    const { history } = this.props;

    alert('登入成功');
    history.push('/course');
  }
  
  componentDidMount(){
    this.loginCheck();  
  }
  
  render(){
    return (
      <div className='login-form-wrapper'>
        <div className='input-box'>
          <label htmlFor='username' className='iconfont icon-user'></label>
          <input 
            type="text" 
            id="username"
            className='login-input' 
            placeholder='管理者名稱'
            onChange={ (e) => this.onInputTyping(e) } />
        </div>
        <div className='input-box'>
          <label htmlFor='password' className='iconfont icon-lock'></label>
          <input 
            type="password" 
            id="password"
            className='login-input' 
            placeholder='管理者密碼'
            onChange={ (e) => this.onInputTyping(e) } />
        </div>
        <div className='input-box'>
          <button 
            className="btn btn-primary"
            onClick={ (e) => this.onLoginSubmit(e) }>登錄後台</button>
        </div>
      </div>
    )
  }
}