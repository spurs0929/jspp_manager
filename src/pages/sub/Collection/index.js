import React, { Component } from 'react';
import CollectionService from 'services/Collection';
import CommonService from 'services/Common'
import { getDatas, confirmText } from 'utils/tools';
import { COLLECTION_TH } from 'config/table_config';
import ListTitle from 'components/common/ListTitle';
import TableHead from 'components/common/TableHead';
import TableBody from './TableBody';

import './index.scss';

const collectionService = new CollectionService(),
      commonService = new CommonService(),
      cfmText = new confirmText('COLLECTION');

export default class Collection extends Component{

  constructor(props){
    super(props);

    this.state = {
      title: '課程集合管理',
      collectionData: []
    }
  }

  async getCollectionData(){
    const result = await collectionService.getCollectionData(),
          errorCode = result.error_code, 
          data = result.data,
          { history } = this.props;    

    getDatas(errorCode, data, history, () => {
      this.setState({
        collectionData: data
      });
    });      
  }

  async onStatusClick(id, index){
    const { collectionData } = this.state,
          status= collectionData[index].status,
          text = cfmText(status),
          cfm = window.confirm(text);
    
    if(cfm){
      switch(status){
        case 1: 
          collectionData[index].status = 0;
          break;
        case 0:
          collectionData[index].status = 1;
          break;
        default:
          break;
      }
  
      this.setState({
        collectionData
      }, async () => {
        const result = await commonService.changeStatus({
          id,
          status: collectionData[index].status,
          field: 'COLLECTION'
        });  
  
        const errorCode = result.error_code;
  
        if(errorCode !== 0){
          const status = collectionData[index].status;
  
          alert(
            status ? '上架集合失敗' : '下架集合失敗'
          )
          return;
        }
      });
    }      

  }

  componentDidMount(){
    this.getCollectionData();
  }

  render(){

    const { title, collectionData } = this.state;
    
    return (
      <div className='list-container'>
        <ListTitle
          title={ title }
          onRefreshData={ this.getCollectionData.bind(this) }
        />
        <table className='list-table'>
          <TableHead
            thData={ COLLECTION_TH }
          />
          <TableBody
            collectionData={ collectionData }
            onStatusClick={ this.onStatusClick.bind(this) }
          />
        </table>
      </div>
    )
  }
}