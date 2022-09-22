import React, { Component } from "react";
import './index.scss';
export default class TableBody extends Component{
  
  render(){
    
    const { collectionData, onStatusClick } = this.props;

    return(
      <tbody>
        {
          collectionData.map((item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.id }</td>
                <td>
                  <a href={ item.qqQunLink } target="_blank" rel="noopener noreferrer">
                    <img 
                      className="collection-img"
                      src={ `http://jsimage.jsplusplus.site/${item.posterKey}` }
                      alt={ item.title } />
                  </a>
                </td>
                <td className="course-name">
                  <a href={ item.qqQunLink } target="_blank" rel="noopener noreferrer">{ item.title}</a>
                </td>
                <td>{ item.info }</td>
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