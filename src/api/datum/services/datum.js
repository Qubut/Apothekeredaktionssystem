'use strict';

/**
 * datum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::datum.datum');
