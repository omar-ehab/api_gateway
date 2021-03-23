import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class MarketService {
  constructor(serviceRegistry) {
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
      deposite: {
        method: "post",
        path: '/:id'
      },
    };
  }

  getUrl(pathName, params = {}) {
    try{
      const { ip, port } = this.serviceRegistry.get('markets_service', '1');
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

export default MarketService
/*class MarketService {
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
        deposite: {
            method: "post",
            path: '/:id'
          },
      };
    }
  
    getUrl(pathName) {
      //this host will come from service registery
      const host = "http://127.0.0.1:5000";
      const path = this.pathes[pathName];
      return {
        method: path.method,
        url:`${host}${path.path}`
      }
    }
  }
  
  export default MarketService*/