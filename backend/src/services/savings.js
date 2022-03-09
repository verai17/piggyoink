const crypto = require('crypto'); 
const jwt = require('../utils/passport-jwt');
const validator = require('../validators/transaction.validator');  
const { sequelize, savings_category, transactions } = require('../models');
  
async function get_category(__, input, ctx) { 
 
    //check if email address exist
    const category = await savings_category.findAll();

    console.log(`category: ${JSON.stringify(category)}`);
  
    return {  category  }
}

async function save(__, input, ctx) { 

    const value = await validator.transactionValidator("transaction",{
        category_name: input.category_name,
        amount: input.amount, 
    })
   
    //save db
    const result = await sequelize.transaction(async (t) => {
 
        let txn = await transactions.create({
            userid: ctx.req.user.id,
            transaction_type: `savings`,
            category_type: value.category_name,
            amount: value.amount, 
        }, { transaction: t });

        let sql = `UPDATE public.user_wallet
                   SET "previousbalance"="currentbalance", "currentbalance"="currentbalance"+${value.amount}, "postbalance"="currentbalance"+${value.amount}, "lastaddedAt"=NOW()::timestamp, "lastaddedamount"=${value.amount}
                   WHERE userid='${ctx.req.user.id}';`;

        await sequelize.query(sql, { transaction: t })
    
        return {
            txn
        };
    
    });

    return {  transaction: result.txn }
}

module.exports = {
    get_category,
    save
}