var Common = require("chthonios/rt/Common");

var config = require("./config.js");
var prefs = require("./config.prefs.js");
var Env = Common.buildEnv(config, prefs);

var GameServer = require('chthonios/game/GameServer');

if (GameServer.Server.boot())
	setInterval(Common.decoratedCallback(GameServer.Server.run, GameServer.Server), 100);