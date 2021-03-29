import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class DoctorService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
      index: {
        method: "get",
        path: "/doctors"
      },
      show: {
        method: "get",
        path: '/doctors/:id'
      },
      findByEmail: {
        method: "get",
        path: '/doctors/:email/read_by_email'
      },
      store: {
        method: "post",
        path: '/doctors'
      },
      update: {
        method: "put",
        path: '/doctors/:id/update'
      },
      destroy: {
        method: "delete",
        path: '/doctors/:id/destroy'
      },
    };
  }

  async getUrl(pathName, params = {}) {
    try{
      const { ip, port } = await this.serviceRegistry.get('doctors_service', '1');
      const host = `http://${ip}:${port}`;
      const originalPath = this.pathes[pathName];
      return replacingPathParams(host, originalPath, params);
    } catch(err){
      return 404;
    }
  }

  async fetchData(pathName, params = {}, body = {}) {

    const config = await this.getUrl(pathName, params);
    if(config === 404)
      return false;
    config['data'] = {...body}
    return axios(config);
  }
}

export default DoctorService