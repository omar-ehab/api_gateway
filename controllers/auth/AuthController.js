import createError from 'http-errors';
import User from '../../models/User.js';
import { authSchema } from '../../helpers/validation_schema.js';
import client from '../../helpers/init_redis.js';
import StudentService from '../../ServicesModels/StudentService.js';
import {
    signAccessToken,
    signRefreshToken,
    verifyRefreshToken,
  } from '../../helpers/jwt_helper.js';

class AuthController {
  constructor(serviceRegistry){
    this.serviceRegistry = serviceRegistry;
    this.studentService = new StudentService(serviceRegistry);
  }

  login = async (req, res, next) => {
    try {
        const result = await authSchema.validateAsync(req.body);
        const user = null; //get user
        // if(type === 'student'){
        //   await this.studentService.fetchData("updateFcmCode", {email: result.email}, {fcm_code: result.fcm_code});
        // }
        if (!user) throw createError.Unauthorized('These credentials do not match our records.')
  
        const isMatch = await user.isValidPassword(result.password)
        if (!isMatch)
          throw createError.Unauthorized('These credentials do not match our records.')
  
        const accessToken = await signAccessToken(user.id)
        const refreshToken = await signRefreshToken(user.id)

        res.json({access_token: accessToken, refresh_token: refreshToken, type: "Bearer", expiresIn: process.env.ACCESS_TOKEN_LIFE})
    } catch (error) {
      if (error.isJoi === true) {
        return next(createError.BadRequest('These credentials do not match our records.'));
      }
      next(error)
    }
  }

  logout = async (req, res) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
        client.DEL(userId, (err, val) => {
          if (err) {
            console.log(err.message)
            throw createError.InternalServerError();
          }
          console.log(val);
          res.sendStatus(204);
        })
    } catch (error) {
      next(error)
    }  
  }

  refresh = async (req, res, next) => {
    try {
        const { refreshToken } = req.body
        if (!refreshToken) throw createError.BadRequest()
        const userId = await verifyRefreshToken(refreshToken)
  
        const access_token = await signAccessToken(userId);
        const refresh_token = await signRefreshToken(userId);
        res.json({access_token, refresh_token, type: "Bearer", expiresIn: process.env.ACCESS_TOKEN_LIFE})
      } catch (error) {
        next(error)
      }
    }


}

export default AuthController;