const forgotPasswordTemplate = require('./email-template/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', 'https://calcheloba.onrender.com'),
  port: env.int('PORT', 1377),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  server: {
    keys: ['iojdwlkasjdlak3123', 'laksjdalksdjlk2323'],
  },
  url: 'https://calcheloba.onrender.com',
  admin: {
    forgotPassword: {
      from: 'niki@gmail.com',
      replyTo: 'nikusha.gogitidze.03@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
