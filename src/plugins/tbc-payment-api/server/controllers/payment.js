'use strict';

module.exports = {
    async find (ctx) {
        try {
            return await strapi.plugin("payment").service("payment").find(ctx.query);
        } catch (err) {
            ctx.throw(500, err);
        }
    }
};