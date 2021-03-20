import StudentService from '../ServicesModels/StudentService.js';
class StudentsController{
  constructor(){
    this.studentService = new StudentService();
  }

  index = async (req, res) => {
    try {
      const response = await this.studentService.fetchData("index")
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
      const response = await this.studentService.fetchData("show", req.params)
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
      const response = await this.studentService.fetchData("store", {}, req.body)
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
      const response = await this.studentService.fetchData("update", req.params, req.body)
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
      const response = await this.studentService.fetchData("destroy", req.params)
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

export default StudentsController;


