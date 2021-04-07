import express from 'express';
import ExcelSheetController from '../controllers/ExcelSheetController.js';


class ExcelSheetRoutes {
    constructor(serviceRegistry) {
      this.router = express.Router();
      this.controller = new ExcelSheetController(serviceRegistry);
    }
    
    routes = () => {
        this.router.post('/recordAttendance',this.controller.record);
        this.router.get('/ExcelSheet',this.controller.generate);
  
      return this.router;
    }
  }

  export default ExcelSheetRoutes;