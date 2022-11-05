"use strict";

/**
 * nachricht controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::nachricht.nachricht",
  ({ strapi }) => ({
    async create(ctx) {
      const response = await super.create(ctx);
      const body = ctx.request.body;
      const sendTo = "info@riem-apotheke.de";
      strapi.log.debug(`Trying to send an email to ${sendTo}`);
      const data = body.data;
      const fullname = `${data.vorname} ${data.name}`;
      const anrede = data.anrede
        ? data.anrede == "Herr"
          ? "Herrn"
          : data.anrede
        : "";

      try {
        const emailOptions = {
          to: sendTo,
          subject: `${data.betreff}`,
          html: `<h1>Nachricht von ${anrede} ${fullname}</h1>
          <ul>
            <li>
            Rufnummer: ${data.telefon}
            </li>
            <li>
            email: ${data.email}
            </li>
          We are here
          </ul>   
          <hr>
          <p>${data.nachricht}</p>
         `,
        };
        await strapi.plugins["email"].services.email.send(emailOptions);
      } catch (err) {
        strapi.log.error(`Error sending email to ${sendTo}`, err);
      }
      return response;
    },
  })
);
