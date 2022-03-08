const service = require('../services/account');
 
module.exports = {

    get_wallet: {
      method: 'get',
      path: '/account/wallet',  
      async resolver(__, input, ctx) { 
        console.log(
          `GET /account/wallet email:${ctx.req.user.email} id:${ctx.req.user.id}`
        )
        const data = await service.get_wallet(__, input, ctx)
        return data
      },

    
    },

    login: {
      method: 'post',
      path: '/account/login', 
      requireAuth: false,
      async resolver(__, input, ctx) {
        console.log(
          `GET /account/login param:emailaddress=${input.emailaddress}"`
        )
        const data = await service.login(__, input, ctx)
        return data 
      },

    
    },

    register: {
        method: 'post',
        path: '/account/register', 
        requireAuth: false,
        async resolver(__, input, ctx) {
          console.log(
            `GET /account/register param:firstname=${input.firstname}&lastname=${input.lastname}&emailaddress=${input.emailaddress}&password=${input.password}"`
          )
          const data = await service.register(__, input, ctx)
          return data 
        },
    }, 
  
}