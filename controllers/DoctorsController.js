import DoctorService from '../ServicesModels/DoctorService.js';
class DoctoresController{
  constructor(){
    this.docService = new DoctorService();
  }

  index = async (req, res) => {
    try {
      const response = await this.docService.fetchData("index")
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
      const response = await this.docService.fetchData("show", req.params)
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
      const response = await this.docService.fetchData("store", {}, req.body)
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
      const response = await this.docService.fetchData("update", req.params, req.body)
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
      const response = await this.docService.fetchData("destroy", req.params)
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

export default DoctoresController;


