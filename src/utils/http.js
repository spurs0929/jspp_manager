import axios from 'axios';
import qs from 'qs';

export default class HTTP{
  axiosPost(options){
    axios({
      url: options.url,
      method: 'post',
      withCredentials: true,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
  }

  axiosGet(options){
    axios({
      url: options.url,
      method: 'get',
      withCredentials: true
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
  }
}