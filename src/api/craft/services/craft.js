'use strict';

/**
 * craft service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::craft.craft');
