const crypto = require('crypto'); 
const jwt = require('../utils/passport-jwt');
const validator = require('../validators/account.validator');  
const { sequelize, users, user_wallet } = require('../models');
 
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
    const result = await sequelize.transaction(async (t) => {
 
        let user = await users.create({
            firstname: value.firstname,
            lastname: value.lastname,
            emailaddress: value.emailaddress,
            password: encryptedPassword,
        },{ transaction: t });
    
        let wallet = await user_wallet.create({
            userid: newUser.id,
            currentbalance: 0
        }, { transaction: t });
    
        return {
            user,
            wallet
        };
    
    });

    console.log(`result: ${JSON.stringify(result)}`);

    const { user: newUser, wallet: userWallet } = result;
     
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
        userWallet: userWallet
    }
}

async function login(__, input, ctx) { 

    const value = await validator.accountValidator("login",{ 
        emailaddress: input.emailaddress, 
        password: input.password
    })
 
    //check if email address exist
    const loginUser = await users.scope('withSecretColumns').findOne({
        where: { emailaddress: value.emailaddress },
    });
 
    if (!loginUser) {
        throw new Error('Invalid credentials.', 400);
    }
 
    //encrypt password
    const encryptedPassword = crypto
      .createHash('md5')
      .update(value.password)
      .digest('hex'); 

    if (loginUser.password !== encryptedPassword) {
        throw new Error('Invalid credentials.');
    }

    //check if email address exist
    const userWallet = await user_wallet.findOne({
        where: { userid: loginUser.id },
    });

    if(!userWallet){
        throw new Error('Server error.', 500);
    }
 
    //generate jwt
    let jwtsession = await jwt.encode({
        "firstname": loginUser.firstname,
        "lastname": loginUser.lastname,
        "email": loginUser.emailaddress, 
        "id": loginUser.id
    });

    if(jwtsession === "error"){
        throw new Error('ERROR_PROCESSING_REQUEST', 401);
    } 

    //delete password
    delete loginUser.password 

    return { 
        token: jwtsession,
        user: loginUser, 
        wallet: userWallet 
    }
}

async function get_wallet(__, input, ctx) { 
 
    //check if email address exist
    const userWallet = await user_wallet.findOne({
        where: { userid: ctx.req.user.id },
    });

    console.log(`userWallet: ${JSON.stringify(userWallet)}`);
  
    return { 
        message: "message", 
    }
}

module.exports = {
    register,
    login,
    get_wallet
}