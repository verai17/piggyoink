const service = require('../services/expenses');
 
module.exports = {

    get_category: {
      method: 'get',
      path: '/expenses/category',  
      async resolver(__, input, ctx) { 
        console.log(
          `GET /expenses/category email:${ctx.req.user.email} id:${ctx.req.user.id}`
        )
        const data = await service.get_category(__, input, ctx)
        return data
      },
 
    },  

    transaction: {
      method: 'post',
      path: '/expenses/save',  
      async resolver(__, input, ctx) { 
        console.log(
          `GET /expenses/save email:${ctx.req.user.email} id:${ctx.req.user.id}
                              param:category_name=${input.category_name}&amount=${input.amount}`
        )
        const data = await service.save(__, input, ctx)
        return data
      },
 
    }, 
  
}