const service = require('../services/savings');
 
module.exports = {

    get_category: {
      method: 'get',
      path: '/savings/category',  
      async resolver(__, input, ctx) { 
        console.log(
          `GET /savings/category email:${ctx.req.user.email} id:${ctx.req.user.id}`
        )
        const data = await service.get_category(__, input, ctx)
        return data
      },
 
    },  

    transaction: {
      method: 'post',
      path: '/savings/save',  
      async resolver(__, input, ctx) { 
        console.log(
          `POST /savings/save email:${ctx.req.user.email} id:${ctx.req.user.id}
                              param:category=${input.category}&amount=${input.amount}`
        )
        const data = await service.save(__, input, ctx)
        return data
      },
 
    }, 
  
}