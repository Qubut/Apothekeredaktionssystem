"use strict";

/**
 * bestellung controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bestellung.bestellung"
  //   ({ strapi }) => ({
  //     async create(ctx) {
  //         let entity;
  //         if (ctx.is('multipart')) {
  //           const { data, files } = parseMultipartData(ctx);
  //           entity = await strapi.services.bestellung.create(data, { files });
  //         } else {
  //           entity = await strapi.services.bestellung.create(ctx.request.body);
  //         }
  //         return sanitizeEntity(entity, { model: strapi.models.bestellung });
  //       },
  //   })
);
