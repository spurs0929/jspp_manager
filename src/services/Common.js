import HTTP from 'utils/http';
import { API } from '../config/config';

const COMMON = API.COMMON;

export default class CommonService extends HTTP{
  changeStatus(data){
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: COMMON.CHANGE_STATUS,
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