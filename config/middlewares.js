module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    enabled: true,
    params: {
      origin: ['http://localhost:5173', 'https://fastidious-kitten-a8ea31.netlify.app'],
      // You can also specify other CORS options here if needed
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
