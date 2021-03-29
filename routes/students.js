import express from 'express';
import StudentsController from '../controllers/StudentsController.js';




class studnetsRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new StudentsController(serviceRegistry);
    }
    
    routes = () => {
        this.router.get('/', this.controller.index);

        this.router.get('/:card_id', this.controller.show);
        
        this.router.post('/', this.controller.store);
        
        this.router.get('/:email/read_by_email', this.controller.findByEmail);
        
        this.router.put('/:card_id/update', this.controller.update);
        
        this.router.delete('/:card_id/destroy', this.controller.destroy);
        
      return this.router;
    }
  }
  
  export default studnetsRoutes;

