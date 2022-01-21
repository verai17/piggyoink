
module.exports = {

    sample: {
        method: 'get',
        path: '/sample', 
        requireAuth: false,
        async resolver(__, input, ctx) {
        //   logger.info(
        //     `GET /base/${ctx.req.params.course_id}/badge/all email:${ctx.req.user.email} role:${ctx.req.user.role} access_token:${ctx.req.user.access_token} expires_token:${ctx.req.user.expires_token}`
        //   )
        //   const data = await service.list_badges(__, input, ctx.req.user, ctx, "BASE")
        //   return data
        return { message: "successfully" }
        },
    },

}