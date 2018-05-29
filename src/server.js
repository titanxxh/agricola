const Server = require('boardgame.io/dist/server').Server;
const Agricola = require('./game').Agricola;
const server = Server({ games: [Agricola] });
server.run(8000);
