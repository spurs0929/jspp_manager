import React, { Component } from 'react';
import TeacherService from 'services/Teacher';
import CommonService from 'services/Common'
import { getDatas, confirmText } from 'utils/tools';
import { TEACHER_TH } from 'config/table_config';
import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const teacherService = new TeacherService(),
      commonService = new CommonService(),
      cfmText = new confirmText('TEACHER'),
      _cfmText = new confirmText('STAR_TEACHER');

export default class Teacher extends Component{

  constructor(props){
    super(props);

    this.state = {
      title: '老師管理',
      teacherData: []
    }
  }

  async getTeacher(){
    const result = await teacherService.getTeacherData(),
          errorCode = result.error_code, 
          data = result.data,
          { history } = this.props;    

    getDatas(errorCode, data, history, () => {
      this.setState({
        teacherData: data
      });
    });      
  }

  async onStatusClick(id, index){
    const { teacherData } = this.state,
          status= teacherData[index].status,
          text = cfmText(status),
          cfm = window.confirm(text);
    
    if(cfm){
      switch(status){
        case 1: 
          teacherData[index].status = 0;
          break;
        case 0:
          teacherData[index].status = 1;
          break;
        default:
          break;
      }
  
      this.setState({
        teacherData
      }, async () => {
        const result = await commonService.changeStatus({
          id,
          status: teacherData[index].status,
          field: 'TEACHER'
        });  
  
        const errorCode = result.error_code;
  
        if(errorCode !== 0){
          const status = teacherData[index].status;
  
          alert(
            status ? '上線上師失敗' : '下線老師失敗'
          )
          return;
        }
      });
    }      
  }

  async onStarClick(id, index){
    const { teacherData } = this.state,
          status = teacherData[index].isStar,
          text = _cfmText(status),
          cfm = window.confirm(text);
    
    if(cfm){
      switch(status){
        case 1: 
          teacherData[index].isStar = 0;
          break;
        case 0:
          teacherData[index].isStar = 1;
          break;
        default:
          break;
      }
  
      this.setState({
        teacherData
      }, async () => {
        const result = await teacherService.selectStarTeacher({
          id,
          isStar: teacherData[index].isStar
        });  
  
        const errorCode = result.error_code;
  
        if(errorCode !== 0){
          const isStar = teacherData[index].isStar;
  
          alert(
            isStar ? '設置該老師為明星老師失敗' : '設置該老師為普通老師失敗'
          )
          return;
        }
      });
    }  
  }

  componentDidMount(){
    this.getTeacher();
  }

  render(){

    const { title, teacherData } = this.state;
    
    return (
      <div className='list-container'>
        <ListTitle
          title={ title }
          onRefreshData={ this.getTeacher.bind(this) }
        />
        <table className='list-table'>
          <TableHead
            thData={ TEACHER_TH }
          />
          <TableBody
            teacherData={ teacherData }
            onStatusClick={ this.onStatusClick.bind(this) }
            onStarClick={ this.onStarClick.bind(this) }
          />
        </table>
      </div>
    )
  }
}