import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class ExcelSheetService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
     
      generate: {
        method: "get",
        path: '/attendance/ExcelSheet'
      },
      record: {
        method: "post",
        path: '/attendance/recordAttendance'
      },
    };

  
  }

  async getUrl(pathName, params = {}) {
    try{
      const { ip, port } = await this.serviceRegistry.get('ExcelSheet_service', '1');
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

export default ExcelSheetService