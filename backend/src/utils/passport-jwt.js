const jwtDecode = require('jwt-decode');
const jwtEncode = require('jwt-encode'); 
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
 
    const email = payload.email
    if (!email) {
      throw new Error('ERROR_INVALID_TOKEN', 401)
    }
     
    const role = payload.role 
    const userId = payload.id
    
    if (!role) {
      throw new Error('ERROR_INVALID_TOKEN', 401)
    }
    else if(role === "learner" && !userId){
      throw new Error('ERROR_INVALID_TOKEN', 401)
    }
    
    req.user = {
      id: userId,
      email: email,
      role: role, 
      token,
    }
     
    next()
  } catch (error) {
    res.status(error.status || 500)
    res.json({ error: error.message })
  }

};
  
