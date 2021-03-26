import axios from 'axios';
import bcrypt from 'bcrypt';


class User {
  constructor(type){
    this.type = type;

    //here we should implement how and from where we will retrive user and validate password
  }

  find_student = async (email) => {
    try {
        return await axios.get(`${STUDENT_OPTIONS.hostname}:${STUDENT_OPTIONS.port}${STUDENT_OPTIONS.path}`,{
            params: {
                email: email
            }
        });
    }catch (err) {
        console.error(err.message);
    }
  }

  find_teacher = async (email) => {
    try {
        return await axios.get(`${TEACHER_OPTIONS.hostname}:${TEACHER_OPTIONS.port}${TEACHER_OPTIONS.path}`,{
            params: {
                email: email
            }
        });
    }catch (err) {
        console.error(err.message);
    }
  }
  isValidPassword = async (user, password) => {
    try {
        return await bcrypt.compare(password, user.password)
    } catch (err) {
        throw err
    }
  }
}

export default User;