import HTTP from 'utils/http';
import { API } from '../config/config';

const STUDENT = API.STUDENT;

export default class StudentService extends HTTP{
  getStudentData(data){
    return new Promise((resolve, reject) => {
      this.axiosGet({
        url: STUDENT.GET_STUDENT_DATA,
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