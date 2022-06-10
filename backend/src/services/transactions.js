const crypto = require('crypto'); 
const jwt = require('../utils/passport-jwt');
const validator = require('../validators/transaction.validator');  
const { sequelize, expense_category, savings_category, transactions } = require('../models');
  
async function get_expenses_category(__, input, ctx) {  
    const category = await expense_category.findAll(); 
    return {  category  }
}

async function get_savings_category(__, input, ctx) {  
    const category = await savings_category.findAll(); 
    return {  category  }
}
 
async function save_expenses(__, input, ctx) { 

    const value = await validator.requestValidator("saveTransaction",{
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
 
async function save_savings(__, input, ctx) { 

    const value = await validator.requestValidator("saveTransaction",{
        category_name: input.category,
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
    get_expenses_category,
    get_savings_category,
    get_transactions,
    save_expenses,
    save_savings
}