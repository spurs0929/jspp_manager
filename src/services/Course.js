import HTTP from 'utils/http';
import { API } from '../config/config';

const COURSE = API.COURSE;

export default class CourseService extends HTTP{
  getCourseData(){
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: COURSE.GET_COURSE_DATA,
        success(data){
          resolve(data);
        },
        error(error){
          alert('網路請求失敗');
        }
      });
    });
  }

  changeCourseField(data){
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: COURSE.CHANGE_COURSE_FIELD,
        data,
        success(data){
          resolve(data);
        },
        error(error){
          alert('網路請求失敗');
        }
      });
    });
  }

}