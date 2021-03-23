import express from 'express';
import PurchaseController from '../controllers/PurchaseController.js';


class PurchaseRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new PurchaseController(serviceRegistry);
    }
    
    routes = () => {
      this.router.put('/convertPoints',this.controller.convertPoints);
      this.router.post('/:student_id/purchase',this.controller.purchase);

      return this.router;
    }
  }
  
  export default PurchaseRoutes;





/*const router = express.Router();
const controller = new PurchaseController();

router.put('/convertPoints', controller.convertPoints);

router.post('/:student_id/purchase', controller.purchase);


export {router as PurchaseRoutes}*/