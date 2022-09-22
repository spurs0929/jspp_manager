import React, { Component } from 'react';
import StudentService from 'services/Student';
import CommonService from 'services/Common'
import { getDatas, confirmText } from 'utils/tools';
import { STUDENT_TH } from 'config/table_config';
import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const studentService = new StudentService(),
      commonService = new CommonService(),
      cfmText = new confirmText('STUDENT');

export default class Student extends Component{

  constructor(props){
    super(props);

    this.state = {
      title: '學生管理',
      studentData: []
    }
  }

  async getStudent(){
    const result = await studentService.getStudentData(),
          errorCode = result.error_code, 
          data = result.data,
          { history } = this.props;    

    getDatas(errorCode, data, history, () => {
      this.setState({
        studentData: data
      });
    });      
  }

  async onStatusClick(id, index){
    const { studentData } = this.state,
          status= studentData[index].status,
          text = cfmText(status),
          cfm = window.confirm(text);
    
    if(cfm){
      switch(status){
        case 1: 
          studentData[index].status = 0;
          break;
        case 0:
          studentData[index].status = 1;
          break;
        default:
          break;
      }
  
      this.setState({
        studentData
      }, async () => {
        const result = await commonService.changeStatus({
          id,
          status: studentData[index].status,
          field: 'STUDENT'
        });  
  
        const errorCode = result.error_code;
  
        if(errorCode !== 0){
          const status = studentData[index].status;
  
          alert(
            status ? '上線學生失敗' : '下線學生失敗'
          )
          return;
        }
      });
    }      
  }

  componentDidMount(){
    this.getStudent();
  }

  render(){

    const { title, studentData } = this.state;
    
    return (
      <div className='list-container'>
        <ListTitle
          title={ title }
          onRefreshData={ this.getStudent.bind(this) }
        />
        <table className='list-table'>
          <TableHead
            thData={ STUDENT_TH }
          />
          <TableBody
            studentData={ studentData }
            onStatusClick={ this.onStatusClick.bind(this) }
          />
        </table>
      </div>
    )
  }
}