module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '315bde24a50205c6d70afb28e85c0da3'),
  },
});
