const service = require('../services/account');
 
module.exports = {

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