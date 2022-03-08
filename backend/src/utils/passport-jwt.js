const jwtDecode = require('jwt-decode');
const jwtEncode = require('jwt-encode'); 
const { users } = require('../models');

require('dotenv').config();
 
exports.encode = async (payload) => { 

  try{

    return await jwtEncode(payload, process.env.JWT_SECRET);

  } catch (error) {
    logger.error(`passport-jwt - encode: ${error}`);
    return "error";
  }
     
};

exports.decode = async (req, res, next) => {

  try {
    // check for JWT token
    const token =
      req.headers.Authorization || req.headers.authorization || req.headers.jwt || req.query.jwt 
    if (!token) {
      throw new Error('ERROR_INVALID_TOKEN', 401)
    }
 
    const payload = jwtDecode(`${token}`.replace(/^Bearer /g, '')) 
    if (!payload) {
      throw new Error('ERROR_INVALID_TOKEN', 401)
    }
 
    const email = payload.email;
    const userid = payload.id;
    if (!email || !userid) {
      throw new Error('ERROR_INVALID_TOKEN', 401)
    }
    else{

      //check if email address exist
      const isValidUser = await users.findOne({
          where: { emailaddress: email },
      });
 
      if(!isValidUser){
        throw new Error('ERROR_INVALID_TOKEN', 401)
      }
      else if(isValidUser.id != userid){ 
        throw new Error('ERROR_INVALID_TOKEN', 401)
      }
     
    }
     
    req.user = {
      id: userid,
      email: email, 
      token,
    }
 
    next()
  } catch (error) {
    res.status(error.status || 500)
    res.json({ error: error.message })
  }

};
  
