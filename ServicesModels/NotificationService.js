import { replacingPathParams } from '../helpers/url.js';
import axios from 'axios';
class NotificationService {
  constructor(serviceRegistry) {
    this.serviceRegistry = serviceRegistry
    this.pathes = {
      index: {
        method: "get",
        path: "/get_notification_types"
      },
      pushNotification: {
        method: "post",
        path: '/push_notification/:fcm_token/:notification_type'
      },
      sendToAll: {
        method: "post",
        path: '/send_to_all/:notification_type'
      },
      inAppNotification: {
        method: "post",
        path: '/in_app_notification/:fcm_token/:notification_type'
      }
    };
  }

  getUrl(pathName, params = {}) {
    try{
      const { ip, port } = this.serviceRegistry.get('notification_service', '1');
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

export default NotificationService