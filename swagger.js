import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Contact API',
    description: 'API for managing contacts'
  },
  host: 'localhost:3000',
  schemes: ['http', 'https']
};
const outputFile = './swagger.json';

const routes = ['./server.js'];

swaggerAutogen()(outputFile, routes, doc);
