import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class WalletService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
      show: {
        method: "get",
        path: '/:studentId'
      },
      checkBalance: {
        method: "get",
        path: '/:student_id/check_balance'
      },
      deposite: {
        method: "put",
        path: '/wallet/:student_id/deposit'
      },
      withDraw: {
          method: "put",
          path: '/wallet/:student_id/withDraw'
        },
    };
  }

  getUrl(pathName, params = {}) {
    try{
      const { ip, port } = this.serviceRegistry.get('wallets_service', '1');
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

export default WalletService

 