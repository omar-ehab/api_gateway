import express from 'express';
import WalletsController from '../controllers/WalletsController.js';
const router = express.Router();
const controller = new WalletsController();

router.get('/:studentId', controller.show);

router.get('/:student_id/check_balance', controller.checkBalance);

router.put('/wallet/:student_id/deposit', controller.deposite);  //post or put????

router.put('/wallet/:student_id/withDraw', controller.withDraw); //post or put????




export {router as WalletRoutes}