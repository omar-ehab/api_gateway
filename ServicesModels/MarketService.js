import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class MarketService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
      index: {
        method: "get",
        path: "/markets"
      },
      show: {
        method: "get",
        path: '/markets/:id'
      },
      store: {
        method: "post",
        path: '/markets'
      },
      update: {
        method: "put",
        path: '/markets/:id/update'
      },
      destroy: {
        method: "delete",
        path: '/markets/:id/destroy'
      },
      deposit: {
        method: "post",
        path: '/markets/:id/deposit'
      },
      withdraw: {
        method: "post",
        path: '/markets/:id/withdraw'
      },
    };
  }

  async getUrl(pathName, params = {}) {
    try{
      const { ip, port } = await this.serviceRegistry.get('markets_service', '1');
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