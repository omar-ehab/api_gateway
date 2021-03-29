import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class LabService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
      store_access: {
        method: "post",
        path: "/labs/store_access_log"
      },
      get_distincet_labs: {
        method: "get",
        path: '/labs/'
      },
      download_excel: {
        method: "get",
        path: '/labs/download_excel/:lab_id'
      },
    };
  }

  getUrl(pathName, params = {}) {
    try{
      const { ip, port } = this.serviceRegistry.get('labs_service', '1');
      const host = `http://${ip}:${port}`;
      const originalPath = this.pathes[pathName];
      return replacingPathParams(host, originalPath, params);
    } catch(err){
      return 404;
    }
  }

  fetchData(pathName, params = {}, body = {}) {

    const config = this.getUrl(pathName, params);

    if(config === 404)
      return false;
    config['data'] = {...body}
    return axios(config);
  }
}

export default LabService