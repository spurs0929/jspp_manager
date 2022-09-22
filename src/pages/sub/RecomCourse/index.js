import React, { Component } from 'react';
import RecomCourseService from 'services/RecomCourse';
import CommonService from 'services/Common'
import { getDatas, confirmText } from 'utils/tools';
import { RECOM_COURSE_TH } from 'config/table_config';
import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const recomCourseService = new RecomCourseService(),
      commonService = new CommonService(),
      cfmText = new confirmText('RECOM_COURSE');

export default class RecomCourse extends Component{

  constructor(props){
    super(props);

    this.state = {
      title: '推薦課程管理',
      recomCourseData: []
    }
  }

  async getRecomCourseData(){
    const result = await recomCourseService.getRecomCourseData(),
          errorCode = result.error_code, 
          data = result.data,
          { history } = this.props;    

    getDatas(errorCode, data, history, () => {
      this.setState({
        recomCourseData: data
      });
    });      
  }

  async onStatusClick(cid, index){
    const { recomCourseData } = this.state,
          status= recomCourseData[index].status,
          text = cfmText(status),
          cfm = window.confirm(text);
    
    if(cfm){
      switch(status){
        case 1: 
          recomCourseData[index].status = 0;
          break;
        case 0:
          recomCourseData[index].status = 1;
          break;
        default:
          break;
      }
  
      this.setState({
        recomCourseData
      }, async () => {
        const result = await commonService.changeStatus({
          id: cid, 
          status: recomCourseData[index].status,
          field: 'RECOM_COURSE'
        });  
  
        const errorCode = result.error_code;
  
        if(errorCode !== 0){
          const status = recomCourseData[index].status;
  
          alert(
            status ? '上架課程失敗' : '下架課程失敗'
          )
          return;
        }
      });
    }      

  }

  componentDidMount(){
    this.getRecomCourseData();
  }

  render(){

    const { title, recomCourseData } = this.state;
    
    return (
      <div className='list-container'>
        <ListTitle
          title={ title }
          onRefreshData={ this.getRecomCourseData.bind(this) }
        />
        <table className='list-table'>
          <TableHead
            thData={ RECOM_COURSE_TH }
          />
          <TableBody
            recomCourseData={ recomCourseData }
            onStatusClick={ this.onStatusClick.bind(this) }
          />
        </table>
      </div>
    )
  }
}