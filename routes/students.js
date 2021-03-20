import express from 'express';
import StudentsController from '../controllers/StudentsController.js';
const router = express.Router();
const controller = new StudentsController();

router.get('/', controller.index);

router.get('/:id', controller.show);

router.post('/', controller.store);

router.put('/:id/update', controller.update);

router.delete('/:id/destroy', controller.destroy);

export {router as studnetsRoutes}