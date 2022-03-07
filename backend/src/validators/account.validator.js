const Joi = require('joi');
const ValidationError = require('./ValidationError')

exports.accountValidator = async (schema_name, param) =>{

    try{ 
        const schema = await getSchema(schema_name);
 
        if(!schema){
            throw new ValidationError(`unable to validate request.`)
        }
 
        return await schema.validateAsync(param);
 
    }
    catch(error){
        throw new ValidationError(error.message)
    }
     
}

async function getSchema(name){ 
    let schema = null;

    switch(name){
        case "register": schema = register(); break;
        default: schema = null; break;
    }
 
    return schema 
}

function register(){
    return Joi.object().keys({
        firstname: Joi
            .string()
            .min(3)
            .max(200) 
            .pattern(new RegExp('^[-. a-zA-Z0-9]+$'))
            .required(),
        lastname: Joi
            .string()
            .min(3)
            .max(200) 
            .pattern(new RegExp('^[-. a-zA-Z0-9]+$'))
            .required(),
        emailaddress: Joi
            .string()
            .email()
            .required(),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });  
}
 