var Common = require("chthonios/rt/Common");

var config = require("./config.js");
var prefs = require("./config.prefs.js");

try {
	var Env = Common.buildEnv(config, prefs);

	var GameServer = require('chthonios/game/GameServer');

	if (GameServer.Server.boot()) {
		console.info("Server ready:", "connect with ports `g=" + config.servers[0].sockets.game + "&m=" + config.servers[0].sockets.map
				+ "` !");
		setInterval(Common.decoratedCallback(GameServer.Server.run, GameServer.Server), 100);
	}
} catch (e) {
	console.error("Unhandled server exception detected:");
	console.error(e);
}