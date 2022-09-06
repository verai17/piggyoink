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

async function get_transactions(__, input, ctx) {  

    let values = await validator.requestValidator("getTransactions",{ 
        limit: input.limit,
        page: input.page
    });

    values.offset = values.page * values.limit;

    console.log('values: ', values);

    const transaction = await transactions.findAll({
        limit: values.limit,
        offset: values.offset,
        where: { 
            userid: ctx.req.user.id
        }, // conditions
        order: [ ['createdAt', 'DESC'] ],
    }); 

    console.log('transaction: ', transaction);


    return {  transaction  }
}

async function save_expenses(__, input, ctx) { 

    const values = await validator.requestValidator("saveTransaction",{
        category_name: input.category,
        amount: input.amount, 
    })
   
    //save db
    const result = await sequelize.transaction(async (t) => {
 
        let txn = await transactions.create({
            userid: ctx.req.user.id,
            transaction_type: `expense`,
            category_type: values.category_name,
            amount: values.amount, 
        }, { transaction: t });

        let sql = `UPDATE public.user_wallet
                   SET "previousbalance"="currentbalance", "currentbalance"=currentbalance-${values.amount}, "postbalance"=currentbalance-${values.amount}, "lastdeductedAt"=NOW()::timestamp, "lastdeductedamount"=${values.amount}
                   WHERE userid='${ctx.req.user.id}';`;

        await sequelize.query(sql, { transaction: t })
    
        return {
            txn
        };
    
    });

    return {  transaction: result.txn }
}
 
async function save_savings(__, input, ctx) { 

    const values = await validator.requestValidator("saveTransaction",{
        category_name: input.category,
        amount: input.amount, 
    })
   
    //save db
    const result = await sequelize.transaction(async (t) => {
 
        let txn = await transactions.create({
            userid: ctx.req.user.id,
            transaction_type: `savings`,
            category_type: values.category_name,
            amount: values.amount, 
        }, { transaction: t });

        let sql = `UPDATE public.user_wallet
                   SET "previousbalance"="currentbalance", "currentbalance"="currentbalance"+${values.amount}, "postbalance"="currentbalance"+${values.amount}, "lastaddedAt"=NOW()::timestamp, "lastaddedamount"=${values.amount}
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