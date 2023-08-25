module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
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
  url: 'http://localhost:1377'
});
