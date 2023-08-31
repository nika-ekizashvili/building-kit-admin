'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('tbc-payment-api')
      .service('myService')
      .getWelcomeMessage();
  },
});
