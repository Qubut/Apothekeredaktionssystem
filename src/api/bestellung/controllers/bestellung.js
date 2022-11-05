"use strict";

/**
 * bestellung controller
 */
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bestellung.bestellung",
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
      const bestellungen = [];
      Object.keys(data.details).forEach((b) => {
        let bestellung = data.details[b];
        bestellungen.push(`
       
        <h3>${bestellung.product}</h3>
        <ul>
        <li>Menge: ${bestellung.amount}</li>
        <li>Rabatt: ${bestellung.discount}%</li>
        <li>GesamtPreis der Bestellung: ${bestellung.preis}€</li>
        </ul>
       
        `);
      });
      const nachricht =
        data.nachricht != ""
          ? `<h2>Nachricht</h2>
          <p>${data.nachricht}</p>`
          : "";
      let ordering = bestellungen.join("");
      try {
        const emailOptions = {
          to: sendTo,
          subject: `Bestellung von ${anrede} ${fullname}`,
          html: `<h1>Bestellung von ${anrede} ${fullname}</h1>
          <ul>
            <li>
            Rufnummer: ${data.telefon}
            </li>
            <li>
            email: ${data.email}
            </li>
            <li>
            Gesamtpreis: ${data.preis}€
            </li>
          </ul>   
          <hr>
          <h2>Bestellungen</h2     
          ${ordering}
          ${nachricht}
          `,
        };
        await strapi.plugins["email"].services.email.send(emailOptions);
        strapi.log.debug(`Email sent to ${sendTo}`);
        ctx.send({ message: "Email sent" });
      } catch (err) {
        strapi.log.error(`Error sending email to ${sendTo}`, err);
        ctx.send({ error: "Error sending email" });
      }
      return response;
    },
  })
);
