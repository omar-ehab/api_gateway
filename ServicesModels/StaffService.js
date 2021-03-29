import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class StaffService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
      index: {
        method: "get",
        path: "/staff"
      },
      show: {
        method: "get",
        path: '/staff/:id'
      },
      findByEmail: {
        method: "get",
        path: '/staff/:email/read_by_email'
      },
      store: {
        method: "post",
        path: '/staff'
      },
      update: {
        method: "put",
        path: '/staff/:id/update'
      },
      destroy: {
        method: "delete",
        path: '/staff/:id/destroy'
      },
    };
  }

  async getUrl(pathName, params = {}) {
    try{
      const { ip, port } = await this.serviceRegistry.get('staff_service', '1');
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

export default StaffService