const forgotPasswordTemplate = require('./email-template/forgot-password');

module.exports = ({ env }) => ({
  host: env('HOST', 'https://calcheloba.onrender.com'),
  // host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  server: {
    keys: ['iojdwlkasjdlak3123', 'laksjdalksdjlk2323'],
  },
  url: 'http://localhost:1337',
  // url: 'https://calcheloba.onrender.com',
  admin: {
    forgotPassword: {
      from: 'nikusha.gogitidze.03@gmail.com',
      replyTo: 'nikusha.gogitidze.03@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
