import React, { Component } from "react";
import './index.scss';

export default class TableBody extends Component{
  
  render(){
    
    const { sliderData, onStatusClick } = this.props;

    return(
      <tbody>
        {
          sliderData.map((item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.id }</td>
                <td>{ item.cid }</td>
                <td>
                  <a href={ item.href } target="_blank" rel="noopener noreferrer">
                    <img 
                      className="slider-img"
                      src={ `http://jsimage.jsplusplus.site/${item.imgKey}` }
                      alt={ item.title } />
                  </a>
                </td>
                <td className="course-name">
                  <a href={ item.href } target="_blank" rel="noopener noreferrer">{ item.title}</a>
                </td>
                <td>
                  <button 
                    className={ ['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ') }
                    onClick={ () => onStatusClick(item.id, index) }>
                    { item.status ? '下架' : '上架' }
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