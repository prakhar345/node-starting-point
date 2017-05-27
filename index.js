'use strict';

const Hapi = require('hapi');
var Calculator = require('./src/calculator.js');
const pool = require('./db.js');
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
        var id = Number(request.query.id);
        pool.query('SELECT val from entry WHERE id=$1', [id], function(err, res){
          if(err){
            return console.error('error running query', err);
          }
          var temp= res.rows[0].val;
          console.log(temp);
          var res = Calculator.sum(Number(num1),Number(temp));
          pool.query('update entry set val = $1 where id = $2', [res,id], (err, res)=>{
            if(err)
              return console.error('error in running query', err);
          });
          reply({
            ans: res
          });
        });

      }
    });

server.route({
  method: 'POST',
  path: '/create',
  handler: function (request,reply) {
    pool.query('INSERT INTO entry(id, val) VALUES($1,$2)', [request.payload.id,0], function(err, res){
      if(err){
        return console.error('error running query', err);
      }
    });
    reply();
  }
    // body...
  });  

server.route({
  method: 'DELETE',
  path: '/reload',
  handler: function (request,reply) {
    pool.query('DELETE from entry','', function(err, res){
      if(err){
        return console.error('error running query', err);
      }
    });
    reply();
  }
    // body...
  }); 


//ans : Calculator.x(Number(request.params.num1),Number(request.params.num2))  
server.start((err) => {

  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
