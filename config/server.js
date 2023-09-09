const forgotPasswordTemplate = require('./email-template/forgot-password');

module.exports = ({ env }) => ({
  // host: env('HOST', 'https://calcheloba.onrender.com'),
  // host: env('HOST', '127.0.0.1'),
<<<<<<< HEAD
=======

>>>>>>> 491219f55c58b51ecf4a381357364e2856ea272e
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
  // url: 'http://localhost:1337',
  url: 'https://calcheloba.onrender.com',
  admin: {
    forgotPassword: {
      from: 'nikusha.gogitidze.03@gmail.com',
      replyTo: 'nikusha.gogitidze.03@gmail.com',
      emailTemplate: forgotPasswordTemplate,
    },
  },
});
