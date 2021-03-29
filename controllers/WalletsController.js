import WalletService from '../ServicesModels/WalletService.js';
class WalletsController{
  constructor(serviceRegistry){
    this.walletService = new WalletService(serviceRegistry);
  }

  show = async (req, res) => {
    try {
      const response = await this.walletService.fetchData("show", req.params)
      // req to get history
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }

  checkBalance = async (req, res) => {
    try {
      const response = await this.walletService.fetchData("checkBalance", req.params, req.body)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }

  deposite = async (req, res) => {
    try {
      const response = await this.walletService.fetchData("deposite", req.params, req.body)
      if(response){
        res.send(response.data);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.send(err.message);
    }
  }

  withDraw = async (req, res) => {
    try {
      const response = await this.walletService.fetchData("withDraw", req.params, req.body)
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

export default WalletsController;


