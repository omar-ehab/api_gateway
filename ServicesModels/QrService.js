import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class QrService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
    
      store: {
        method: "post",
        path: '/'
      },
     
    };
  }

  getUrl(pathName, params = {}) {
    try{
      const { ip, port } = this.serviceRegistry.get('Qr_service', '1');
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

export default QrService