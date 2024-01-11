(function() {
  var connect, dir, path, port, server;

  connect = require('connect');

  path = require('path');

  dir = path.resolve(process.argv[2]);

  if (dir == null) {
    dir = '.';
  }

  port = process.argv[3];

  if (port == null) {
    port = 8080;
  }

  server = connect.createServer(connect["static"](dir));

  server.listen(port);

  console.log("Serving " + dir + " on http://localhost:" + port);

}).call(this);
