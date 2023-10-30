'use strict';

/**
 * shared-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-project.shared-project');
