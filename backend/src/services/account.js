const crypto = require('crypto'); 
const jwt = require('../utils/passport-jwt');
const validator = require('../validators/account.validator'); 
const { users } = require('../models');
  
async function register(__, input, ctx) { 

    const value = await validator.accountValidator("register",{
        firstname: input.firstname,
        lastname: input.lastname,
        emailaddress: input.emailaddress, 
        password: input.password
    })
 
    //check if email address exist
    const isEmailExist = await users.scope('withSecretColumns').findOne({
        where: { emailaddress: value.emailaddress },
    });
 
    if (isEmailExist) {
        throw new Error('User already exists with same email.', 400);
    }
 
    //encrypt password
    const encryptedPassword = crypto
      .createHash('md5')
      .update(value.password)
      .digest('hex'); 

    //save db
    let newUser = await users.create({
        firstname: value.firstname,
        lastname: value.lastname,
        emailaddress: value.emailaddress,
        password: encryptedPassword,
    });

    console.log(`newUser: ${JSON.stringify(newUser)}`);

    //generate jwt
    let jwtsession = await jwt.encode({
        "firstname": newUser.firstname,
        "lastname": newUser.lastname,
        "email": newUser.emailaddress, 
        "id": newUser.id
    });

    if(jwtsession === "error"){
        throw new Error('ERROR_PROCESSING_REQUEST', 401);
    } 

    //delete password
    delete newUser.password 

    return { 
        token: jwtsession,
        user: newUser, 
    }
}

module.exports = {
    register,
}