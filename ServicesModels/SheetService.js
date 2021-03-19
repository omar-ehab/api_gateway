class SheetService {
    constructor() {
      this.pathes = {
    
        generate: {
            method: "get",
            path: '/:id'
        },
      };
    }
  
    getUrl(pathName) {
      //this host will come from service registery
      const host = "http://127.0.0.1:5000";
      const path = this.pathes[pathName];
      return {
        method: path.method,
        url:`${host}${path.path}`
      }
    }
  }
  
  export default SheetService