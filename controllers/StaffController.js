import StaffService from '../ServicesModels/StaffService.js';
class StaffController{
  constructor(){
    this.staffService = new StaffService();
  }

  index = async (req, res) => {
    try {
      const response = await this.staffService.fetchData("index")
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }
  
  show = async (req, res) => {
    try {
      const response = await this.staffService.fetchData("show", req.params)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }
  
  store = async (req, res) => {
    try {
      const response = await this.staffService.fetchData("store", {}, req.body)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }

  update = async (req, res) => {
    try {
      const response = await this.staffService.fetchData("update", req.params, req.body)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }

  destroy = async (req, res) => {
    try {
      const response = await this.staffService.fetchData("destroy", req.params)
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

export default StaffController;


