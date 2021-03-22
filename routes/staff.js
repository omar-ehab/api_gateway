import express from 'express';
import StaffController from '../controllers/StaffController.js';
const router = express.Router();
const controller = new StaffController();

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id/update', controller.update);

router.delete('/:id/destroy', controller.destroy);

export {router as staffRoutes}