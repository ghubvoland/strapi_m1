module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8fa607dfe6f38935c4c5e6bdc7c5f314'),
  },
});
