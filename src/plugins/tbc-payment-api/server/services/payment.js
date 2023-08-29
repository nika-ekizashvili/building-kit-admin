"use strict";

module.exports = ({ strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany("plugin::payment.payment", query);
  },

  async delete(id) {
    return await strapi.entityService.delete("plugin::payment.payment", id);
  },

  async create(data) {
    return await strapi.entityService.create("plugin::payment.payment", data);
  },

  async update(id, data) {
    return await strapi.entityService.update("plugin::payment.payment", id, data);
  },

  async toggle(id) {
    const result = await strapi.entityService.findOne("plugin::payment.payment", id);

    return await strapi.entityService.update("plugin::payment.payment", id, {
      data: { isDone: !result.isDone },
    });
  },
});