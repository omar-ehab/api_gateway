import express from 'express';
import ExcelSheetController from '../controllers/ExcelSheetController.js';
const router = express.Router();
const controller = new ExcelSheetController();

router.get('/:Qrid', controller.generate);


export {router as ExcelSheetRoutes}