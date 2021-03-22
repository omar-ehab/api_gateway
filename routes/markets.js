import express from 'express';
import MarketsController from '../controllers/MarketsController.js';
const router = express.Router();
const controller = new MarketsController();

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id/update', controller.update);

router.delete('/:id/destroy', controller.destroy);

router.post('/:id/deposite', controller.deposite);

export {router as marketRoutes}