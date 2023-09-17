// console.log('Halo semuanya, disini saya akan membuat RESTful API');
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cores: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
