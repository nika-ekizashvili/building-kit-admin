'use strict';

/**
 * shared-project router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::shared-project.shared-project');
