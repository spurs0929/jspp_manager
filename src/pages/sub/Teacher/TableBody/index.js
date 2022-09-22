import React, { Component } from "react";
import './index.scss';

export default class TableBody extends Component{
  
  render(){
    
    const { teacherData, onStatusClick, onStarClick } = this.props;

    return(
      <tbody>
        {
          teacherData.map((item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.id }</td>
                <td className="img-td">
                  <a href={ item.href } target="_blank" rel="noopener noreferrer">
                    <img 
                      className="teacher-img"
                      src={ `http://jsimage.jsplusplus.site/${item.teacherImgKey}` }
                      alt={ item.teacherName } />
                  </a>
                </td>
                <td>
                  <a href={ item.href } target="_blank" rel="noopener noreferrer">{ item.teacherName }</a>
                </td>
                <td>{ item.courseCount }</td>
                <td>{ item.studentCount }</td>
                <td className="intro-td">{ item.intro }</td>
                <td>
                  <button 
                    className={ ['btn', item.isStar ? 'btn-danger' : 'btn-success'].join(' ') }
                    onClick={ () => onStarClick(item.id, index) }>
                    { item.isStar ? '下線明星' : '上線明星' }
                  </button>
                </td>
                <td>
                  <button 
                    className={ ['btn', item.status ? 'btn-danger' : 'btn-success'].join(' ') }
                    onClick={ () => onStatusClick(item.id, index) }>
                    { item.status ? '下線' : '上線' }
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