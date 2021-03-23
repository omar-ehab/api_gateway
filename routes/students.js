import express from 'express';
import StudentsController from '../controllers/StudentsController.js';




class studnetsRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new StudentsController(serviceRegistry);
    }
    
    routes = () => {
        this.router.get('/', this.controller.index);

        this.router.get('/:id', this.controller.show);
        
        this.router.post('/', this.controller.store);
        
        this.router.put('/:id/update', this.controller.update);
        
        this.router.delete('/:id/destroy', this.controller.destroy);
        
      return this.router;
    }
  }
  
  export default studnetsRoutes;

