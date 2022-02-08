let server;
server = require('./src/server').makeServer();
server.listen(9000, function() {
  console.log('Server listening on 9000');
});
