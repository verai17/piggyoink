const crypto = require('crypto'); 
const jwt = require('../utils/passport-jwt');
const validator = require('../validators/transaction.validator');  
const { sequelize, expense_category, transactions } = require('../models');
  
async function get_category(__, input, ctx) {  
    const category = await expense_category.findAll(); 
    return {  category  }
}

async function save(__, input, ctx) { 

    const value = await validator.transactionValidator("transaction",{
        category_name: input.category,
        amount: input.amount, 
    })
   
    //save db
    const result = await sequelize.transaction(async (t) => {
 
        let txn = await transactions.create({
            userid: ctx.req.user.id,
            transaction_type: `expense`,
            category_type: value.category_name,
            amount: value.amount, 
        }, { transaction: t });

        let sql = `UPDATE public.user_wallet
                   SET "previousbalance"="currentbalance", "currentbalance"=currentbalance-${value.amount}, "postbalance"=currentbalance-${value.amount}, "lastdeductedAt"=NOW()::timestamp, "lastdeductedamount"=${value.amount}
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