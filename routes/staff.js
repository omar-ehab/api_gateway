import express from 'express';
import StaffController from '../controllers/StaffController.js';



class staffRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new StaffController(serviceRegistry);
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
  
  export default staffRoutes;





/*const router = express.Router();
const controller = new StaffController();

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id/update', controller.update);

router.delete('/:id/destroy', controller.destroy);

export {router as staffRoutes}*/