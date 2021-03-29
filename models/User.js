import bcrypt from 'bcrypt';
import DoctorService from '../ServicesModels/DoctorService.js';
import StudentService from '../ServicesModels/StudentService.js';
import StaffService from '../ServicesModels/StaffService.js';
// import AdminService from '../ServicesModels/AdminService.js';


class User {
  constructor(type, email, serviceRegistry){
    this.type = type;
    this.email = email;
    this.serviceRegistry = serviceRegistry;
  }

    //here we should implement how and from where we will retrive user and validate password

  init_user = async () => {
    if (this.type == 'doctor'){
      this.doctorService = new DoctorService(this.serviceRegistry);
      try{
        const response = await this.doctorService.fetchData("findByEmail", {email: this.email});
        if(response) {
          this.email = response.data.email;
          this.password = response.data.password;
          return true
        }
      } catch(err){
        return false
      }
    } else if(this.type == 'student') {
      this.studentService = new StudentService(this.serviceRegistry);
      try{
        const response = await this.studentService.fetchData("findByEmail", {email: this.email});
        if(response) {
          this.email = response.data.email;
          this.password = response.data.password;
          return true
        }
      } catch(err){
        return false
      }
    } else if(this.type == 'staff') {
      this.staffService = new StaffService(this.serviceRegistry);
      try{
        const response = await this.staffService.fetchData("findByEmail", {email: this.email});
        if(response) {
          this.email = response.data.email;
          this.password = response.data.password;
          return true
        }
      } catch(err){
        return false
      }
    }
    // } else if(this.type == 'admin') {
    //   this.adminService = new AdminService(this.serviceRegistry);
    //   try{
    //     const response = await this.adminService.fetchData("findByEmail", {email: this.email});
    //     if(response) {
    //       this.email = response.data.email;
    //       this.password = response.data.password;
    //       return true
    //     }
    //   } catch(err){
    //     return false
    //   }
    // }
  }

  isValidPassword = async (password) => {
    try {
        return await bcrypt.compare(password, this.password)
    } catch (err) {
        throw err
    }
  }
}

export default User;