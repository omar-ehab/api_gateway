import express from 'express';
import LabsController from '../controllers/LabsController.js';


class labRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new LabsController(serviceRegistry);
    }
    
    routes = () => {
      this.router.get('/', this.controller.index);
  
      this.router.get('/:id',this.controller.show);
      this.router.post('/', this.controller.store);
  
      this.router.put('/:id/update', this.controller.update);
  
      this.router.delete('/:id/destroy', this.controller.destroy);
  
      return this.router;
    }
  }
  export default labRoutes;
  
/*  router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id/update', controller.update);

router.delete('/:id/destroy', controller.destroy);*/