'use strict';

/**
 * flagge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flagge.flagge');
