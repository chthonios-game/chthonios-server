var WebSocket = require('ws');

var Common = require("./common.js");
var Sockets = require("./serversocket.js");
var World = require("./worlds.js");
var FlatGenerator = require("./generators/flat.js");
var MapServer = require("./mapserver.js");
var PlayerModel = World.PlayerModel;

var Server = {

	serverSocket : null,
	mapServer : null,
	world : null,

	boot : function() {
		try {
			console.log("Starting server...");
			this.world = new World.World("0000-0000-0000-0001", 8, 8, 32, 32);
			this.world.generate(new FlatGenerator.FlatGenerator(0));

			this.mapServer = new MapServer.MapService({
				port : 9001
			});
			this.mapServer.init();

			this.serverSocket = new WebSocket.Server({
				port : 1357
			});

			this.serverSocket.on("connection", Common.decoratedCallback(function(csocket) {
				console.log(csocket._socket.remoteAddress, csocket._socket.remotePort, "handling connection");
				var client = new Sockets.ClientSocket(this, csocket);
				var player = new PlayerModel.NetworkPlayer(this, client);

				player.init(this.world);
				client.bind("open", Common.decoratedCallback(function() {
					console.log(player.toString(), "network connection established");
					this.world.connectPlayerToWorld(player);
				}, this));

			}, this));
			return true;
		} catch (e) {
			console.error("**** The server could not start! ****");
			if (e.toString() == "Error" || e.toString() == "[Error]")
				console.error(e.message + ", " + e.stack);
			else {
				console.error(e.toString());
				console.error(e.stack);
			}
			return false;
		}
	},

	run : function() {
		this.world.update();
	}
}

if (Server.boot())
	setInterval(Common.decoratedCallback(Server.run, Server), 100);
