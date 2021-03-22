import express from 'express';
import PurchaseController from '../controllers/PurchaseController.js';
const router = express.Router();
const controller = new PurchaseController();

router.put('/convertPoints', controller.convertPoints);

router.post('/:student_id/purchase', controller.purchase);


export {router as PurchaseRoutes}