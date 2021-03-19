class DoctorService {
  constructor() {
    this.pathes = {
      index: {
        method: "get",
        path: "/"
      },
      show: {
        method: "get",
        path: '/:id'
      },
      store: {
        method: "post",
        path: '/'
      },
      update: {
        method: "put",
        path: '/:id'
      },
      destroy: {
        method: "delete",
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

export default DoctorService