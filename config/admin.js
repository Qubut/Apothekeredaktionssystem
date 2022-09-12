const getUrl = () => {
  if (process.argv.join(" ").includes("strapi develop")) {
    return "admin";
  } else {
    return "dev/admin";
  }
};

module.exports = ({ env }) => ({
  auth: {
    secret: env("JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  // url: getUrl(),
  // autoOpen: false,
});
