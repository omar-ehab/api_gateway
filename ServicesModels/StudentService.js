import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class StudentService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
      this.pathes = {
        index: {
          method: "get",
          path: "/students"
        },
        show: {
          method: "get",
          path: '/students/:card_id'
        },
        findByEmail: {
          method: "get",
          path: '/students/:email/read_by_email'
        },
        store: {
          method: "post",
          path: '/students'
        },
        update: {
          method: "put",
          path: '/students/:card_id/update'
        },
        destroy: {
          method: "delete",
          path: '/students/:card_id/destroy'
        },
        updateFcmCode: {
          method: "put",
          path: '/students/:email/update_fcm'
        },
      };
    }
  
   async getUrl(pathName, params = {}) {
      try{
        const { ip, port } = await this.serviceRegistry.get('students_service', '1');
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
  
  export default StudentService