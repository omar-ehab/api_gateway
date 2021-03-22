import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class LabService {
  constructor() {
    this.pathes = {
      index: {
        method: "get",
        path: "/"
      },
      show: {
        method: "get",
        path: '/:id'
      },
      store: {
        method: "post",
        path: '/'
      },
      update: {
        method: "put",
        path: '/:id'
      },
      destroy: {
        method: "delete",
        path: '/:id'
      },
    };
  }

  getUrl(pathName, params = {}) {
    //this host will come from service registery
    const host = "http://127.0.0.1:5000";
    const originalPath = this.pathes[pathName];
    return replacingPathParams(host, originalPath, params);
  }

  fetchData(pathName, params = {}, body = {}) {
    const config = this.getUrl(pathName, params);
    config['body'] = {...body}
    if(config === 404)
      return false;
    return axios(config);
  }
}

export default LabService