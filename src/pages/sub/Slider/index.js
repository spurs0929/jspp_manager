import React, { Component } from 'react';
import SliderService from 'services/Slider';
import CommonService from 'services/Common'
import { getDatas, confirmText } from 'utils/tools';
import { SLIDER_TH } from 'config/table_config';
import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const sliderService = new SliderService(),
      commonService = new CommonService(),
      cfmText = new confirmText('SLIDER');

export default class Slider extends Component{

  constructor(props){
    super(props);

    this.state = {
      title: '輪播圖管理',
      sliderData: []
    }
  }

  async getSliderData(){
    const result = await sliderService.getSliderData(),
          errorCode = result.error_code, 
          data = result.data,
          { history } = this.props;    

    getDatas(errorCode, data, history, () => {
      this.setState({
        sliderData: data
      });
    });      
  }

  async onStatusClick(id, index){
    const { sliderData } = this.state,
          status= sliderData[index].status,
          text = cfmText(status),
          cfm = window.confirm(text);
    
    if(cfm){
      switch(status){
        case 1: 
          sliderData[index].status = 0;
          break;
        case 0:
          sliderData[index].status = 1;
          break;
        default:
          break;
      }
  
      this.setState({
        sliderData
      }, async () => {
        const result = await commonService.changeStatus({
          id,
          status: sliderData[index].status,
          field: 'SLIDER'
        });  
  
        const errorCode = result.error_code;
  
        if(errorCode !== 0){
          const status = sliderData[index].status;
  
          alert(
            status ? '上架輪播圖失敗' : '下架輪播圖失敗'
          )
          return;
        }
      });
    }      

  }

  componentDidMount(){
    this.getSliderData();
  }

  render(){

    const { title, sliderData } = this.state;
    
    return (
      <div className='list-container'>
        <ListTitle
          title={ title }
          onRefreshData={ this.getSliderData.bind(this) }
        />
        <table className='list-table'>
          <TableHead
            thData={ SLIDER_TH }
          />
          <TableBody
            sliderData={ sliderData }
            onStatusClick={ this.onStatusClick.bind(this) }
          />
        </table>
      </div>
    )
  }
}