module.exports = ({ env }) => ({
  "strapi-chatgpt": {
    enabled: true,
  },
  "drag-drop-content-types": {
    enabled: true,
  },
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes
    },
  },
  "tbc-payment-api": {
    enabled: true,
    resolve: "./src/plugins/tbc-payment-api",
  },
  "strapi-google-auth": {
    enabled: true,
  },
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "b_kalichava@cu.edu.ge",
        defaultReplyTo: "b_kalichava@cu.edu.ge",
        testAddress: "b_kalichava@cu.edu.ge",
      },
    },
  },
});
