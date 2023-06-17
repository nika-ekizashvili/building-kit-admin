'use strict';

/**
 * default-image service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-image.default-image');
