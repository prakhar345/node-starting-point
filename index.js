'use strict';

const Hapi = require('hapi');
var Calculator = require('./src/calculator.js');
const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/wdwd',
  handler: function (request, reply) {
    // reply.file('./index.html');
  }
});

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./index.html');
    }
  });
});


server.route({
  method: 'GET',
  path: '/calculate/',
  handler: function (request, reply) {
        var x = request.query.operation; // reply.file('./index.html');
        var num1 = request.query.num1;
        var num2 = request.query.num2;
        console.log(request.query);

        reply({
          ans: Calculator.sum(Number(num1),Number(num2))
        });
      }
    });
//ans : Calculator.x(Number(request.params.num1),Number(request.params.num2))  
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
