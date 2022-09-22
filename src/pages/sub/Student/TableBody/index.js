import React, { Component } from "react";
import './index.scss';

export default class TableBody extends Component{

  render(){
    
    const { studentData, onStatusClick } = this.props;

    return(
      <tbody>
        {
          studentData.map((item, index) => {
            return (
              <tr key={ index }>
                <td>{ item.id }</td>
                <td className="img-td">
                    <img 
                      className="student-img"
                      src={ `http://jsimage.jsplusplus.site/${item.studentImgKey}` }
                      alt={ item.studentName } />
                </td>
                <td>{ item.studentName }</td>
                <td className="intro-td">{ item.intro }</td>
                <td>
                  <a href={ item.courseLink } target="_blank" rel="noopener noreferrer">{ item.courseName }</a>
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