module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b782708257d860ec62b7cffab2abc672'),
  },
});
