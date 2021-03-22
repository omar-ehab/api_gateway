import express from 'express';
import QrController from '../controllers/QrController.js';
const router = express.Router();
const controller = new QrController();



router.post('/', controller.store);


export {router as QrRoutes}