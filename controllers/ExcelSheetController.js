import ExcelSheetService from '../ServicesModels/ExcelSheetService.js';
class ExcelSheetController{
  constructor(serviceRegistry){
    this.excelSheetService = new ExcelSheetService(serviceRegistry);
  }

  generate = async (req, res) => {
    try {
      const response = await this.excelSheetService.fetchData("generate", req.params)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }
  
 
}

export default ExcelSheetController;


