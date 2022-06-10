const service = require('../services/transactions'); 
 
module.exports = {

    get_expense_category: {
      method: 'get',
      path: '/expenses/category',  
      async resolver(__, input, ctx) { 
        console.log(
          `GET /expenses/category email:${ctx.req.user.email} id:${ctx.req.user.id}`
        )
        const data = await service.get_expenses_category(__, input, ctx)
        return data
      },
 
    },  

    get_savings_category: {
      method: 'get',
      path: '/savings/category',  
      async resolver(__, input, ctx) { 
        console.log(
          `GET /savings/category email:${ctx.req.user.email} id:${ctx.req.user.id}`
        )
        const data = await service.get_savings_category(__, input, ctx)
        return data
      },
 
    }, 
     
    save_expenses: {
      method: 'post',
      path: '/expenses/save',  
      async resolver(__, input, ctx) { 
        console.log(
          `POST /expenses/save email:${ctx.req.user.email} id:${ctx.req.user.id}
                              param:category_name=${input.category}&amount=${input.amount}`
        )
        const data = await service.save_expenses(__, input, ctx)
        return data
      },
 
    },
     
    save_savings: {
      method: 'post',
      path: '/savings/save',  
      async resolver(__, input, ctx) { 
        console.log(
          `POST /savings/save email:${ctx.req.user.email} id:${ctx.req.user.id}
                              param:category=${input.category}&amount=${input.amount}`
        )
        const data = await service.save_savings(__, input, ctx)
        return data
      },
 
    }, 
  
}