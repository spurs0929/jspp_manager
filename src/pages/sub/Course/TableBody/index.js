import React, { Component } from "react";
import TableSelect from "components/common/TableSelect";
import './index.scss';


export default class TableBody extends Component{
  
  render(){
    
    const { courseData, fieldData, onSelectChange, onStatusClick } = this.props;

    return(
      <tbody>
        {
          courseData.map((item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.cid }</td>
                <td>
                  <a href={ item.href } target="_blank" rel="noopener noreferrer">
                    <img 
                      className="course-img"
                      src={ `http://jsimage.jsplusplus.site/${item.posterKey}` }
                      alt={ item.courseName} />
                  </a>
                </td>
                <td className="course-name">
                  <a href={ item.href } target="_blank" rel="noopener noreferrer">{ item.courseName}</a>
                </td>
                <td>
                  <span className={ item.price === '0' ? 'free' : 'price'}>
                    { item.price === '0' ? '免費' : `¥${item.price}`}
                  </span>
                </td>
                <td>{ item.studentCount }</td>
                <td>
                  <TableSelect
                    fieldData={ fieldData }
                    selectIdx={ index }
                    cid={ item.cid }
                    defaultValue={ item.fieldTitle }
                    onSelectChange={ onSelectChange }
                  />
                </td>
                <td>
                  <button 
                    className={ ['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ') }
                    onClick={ () => onStatusClick(item.cid, index) }>
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