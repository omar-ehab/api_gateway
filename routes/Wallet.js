import express from 'express';
import WalletsController from '../controllers/WalletsController.js';


class WalletRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new WalletsController(serviceRegistry);
    }
    
    routes = () => {
        this.router.get('/:studentId', this.controller.show);

        this.router.get('/:student_id/check_balance', this.controller.checkBalance);
        
        this.router.put('/wallet/:student_id/deposit', this.controller.deposite);  //post or put????
        
        this.router.put('/wallet/:student_id/withdraw', this.controller.withDraw); //post or put????
  
      return this.router;
    }
  }
  
  export default WalletRoutes;
