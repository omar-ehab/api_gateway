import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class DoctorService {
  constructor(serviceRegistry) {
    console.log(serviceRegistry);
    this.serviceRegistry = serviceRegistry
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
    const { ip, port } = this.serviceRegistry.get('doctors_service', '1');
    const host = `http://${ip}:${port}`;
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

export default DoctorService