export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};
const serverless = require("serverless-http");
const Strapi = require("@strapi/strapi/lib/index.js");

module.exports.hello = async (event, context) => {
  return {
    body: JSON.stringify({ message: "Hello from Serverless" }),
    headers: { "Content-Type": "application/json" },
  };
};

const startStrapi = async (strapi) => {
  try {
    if (!strapi.isLoaded) {
      await strapi.load();
    }
    await strapi.postListen();
    strapi.server.mount();
    return strapi;
  } catch (error) {
    return strapi.stopWithError(error);
  }
};

module.exports.strapiHandler = async (event, context) => {
  let workingDir = process.cwd();
  if (process.env.LAMBDA_TASK_ROOT && process.env.IS_OFFLINE !== "true") {
    workingDir = process.env.LAMBDA_TASK_ROOT;
  }
  if (!global.strapi) {
    console.info("Cold starting Strapi");
    Strapi({ dir: workingDir });
  }
  if (!global.strapi.isLoaded) {
    await startStrapi(global.strapi);
  }
  const handler = serverless(global.strapi.server.app);
  return handler(event, context);
};
