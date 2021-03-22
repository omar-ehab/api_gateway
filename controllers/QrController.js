import QrService from '../ServicesModels/QrService.js';
class QrController{
  constructor(){
    this.QrService = new QrService();
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


