import LabService from '../ServicesModels/LabService.js';
class LabsController{
  constructor(serviceRegistry){
    this.labService = new LabService(serviceRegistry);
  }

  store_access = async (req, res) => {
    try {
      const response = await this.labService.fetchData("store_access")
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }
  
  get_distincet_labs = async (req, res) => {
    try {
      const response = await this.labService.fetchData("get_distincet_labs", req.params)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }
  
  download_excel = async (req, res) => {
    try {
      const response = await this.labService.fetchData("download_excel", {}, req.body)
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

export default LabsController;


