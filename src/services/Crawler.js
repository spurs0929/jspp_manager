import HTTP from 'utils/http';
import { API } from '../config/config';

const CRAWLER = API.CRAWLER;

export default class Crawler extends HTTP{
  crawlerAction(apiName){
    return new Promise((resolve, reject) => {
      this.axiosPost({
        url: CRAWLER.CRAWL_ACTION + apiName,
        data: { apiName },
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