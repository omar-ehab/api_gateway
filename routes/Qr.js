import express from 'express';
import QrController from '../controllers/QrController.js';

class QrRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new QrController(serviceRegistry);
    }
    
    routes = () => {
    this.router.post('/',this.controller.store);
  
      return this.router;
    }
  }
  
  export default QrRoutes;






