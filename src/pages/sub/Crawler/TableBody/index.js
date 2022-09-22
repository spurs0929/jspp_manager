import React, { Component } from 'react';

import './index.scss';

export default class TableBody extends Component{
  render(){
    const { crawlerData, onCrawlClick } = this.props;
    
    return (
      <tbody>
        {
          crawlerData.map((item, index) => {
            return (
              <tr key={ index }>
                <td className='desc-td'>{ item.description }</td>
                <td className='btn-td'>
                  <button 
                    className={ ['btn', item.loading ? 'btn-warning' : 'btn-success'].join(' ') }
                    disabled={ item.loading ? 'disabled' : ''}
                    onClick={ () => onCrawlClick(item.apiName, index)}>
                    { item.loading ? '爬取資料中' : item.title }  
                    </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>  
    )
  }
}