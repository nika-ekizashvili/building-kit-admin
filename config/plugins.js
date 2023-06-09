module.exports = ({ env }) => ({
  
  "strapi-chatgpt": {
    enabled: true,
  },
  'drag-drop-content-types': {
    enabled: true
  },
  'upload': {
    config: {
      sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
    }
  },
  'tbc-payment-api': {
    enabled: true,
    resolve: './src/plugins/tbc-payment-api'
  },
});

  