import QrService from '../ServicesModels/QrService.js';
class QrController{
  constructor(serviceRegistry){
    this.QrService = new QrService(serviceRegistry);
  }

  store = async (req, res) => {
    try {
      const response = await this.QrService.fetchData("store", {}, req.body)
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

export default QrController;


