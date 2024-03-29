const Joi = require('joi');
const ValidationError = require('./ValidationError')

exports.requestValidator = async (schema_name, param) =>{

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
        case "saveTransaction": schema = transaction(); break; 
        case "getTransactions": schema = list_transactions(); break; 
        default: schema = null; break;
    }
 
    return schema 
}

function transaction(){
    return Joi.object().keys({
        category_name: Joi
            .string() 
            .required(),
        amount: Joi
            .number()
            .min(0) 
            .required()
    });  
}

function list_transactions(){
    return Joi.object().keys({
        limit: Joi
            .number()
            .integer()
            .positive()
            .allow(null)
            .default(100),
        page: Joi
            .number()
            .integer()
            .allow(null)
            .default(0),
    });  
}
 