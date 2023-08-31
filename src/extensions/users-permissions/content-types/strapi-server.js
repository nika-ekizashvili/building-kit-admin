
module.exports = (plugin) => {
    plugin.controllers.users.updateUser = async (ctx) => {
        if (!ctx.state.users || !ctx.state.users.id) {
            return ctx.response.status = 401;
        }
        await strapi.query('plugin::users-permissions.user').update({
            where: {id: ctx.state.user.id},
            data: ctx.request.body.data
          }).then((res) => {
            ctx.response.status = 200;
          })
    }

    plugin.routes['content-api'].routes.push({
        method: "POST",
      path: "/user/updateLoggedInUser",
      handler: "user.updateLoggedInUser",
      config: {
        prefix: "",
        policies: []
      }
    })

    return plugin;
}