import express from 'express';
import LabsController from '../controllers/LabsController.js';
const router = express.Router();
const controller = new LabsController();

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id/update', controller.update);

router.delete('/:id/destroy', controller.destroy);

export {router as labRoutes}