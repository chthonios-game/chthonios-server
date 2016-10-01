var Common = require("../common.js");

var EntityHelm = Common.Class.extend({
	init : function() {
	},
	update : function(entity) {
		/* do nothing */
	}
});

var AIEntityHelm = EntityHelm.extend({
	init : function() {
		this._super();
	},
	update : function() {
		/* TODO: AI things */
	}
});

var PlayerEntityHelm = EntityHelm.extend({
	commands : [],
	init : function() {
		this._super();
	},
	pushCommand : function(cmd) {
		this.commands.push(cmd);
	},
	update : function(entity) {
		if (this.commands.length != 0) {
			var cmds = this.commands;
			this.commands = [];
			for (var i = 0; i < cmds.length; i++) {
				var cmd = cmds[i];
				if (cmd.key = "click") {
					var varppos = entity.getPosition();
					if (varppos.x < cmd.value.x - 1)
						entity.move(0.5, 0);
					else if (varppos.x > cmd.value.x + 1)
						entity.move(-0.5, 0);

					if (varppos.y < cmd.value.y - 1)
						entity.move(0, 0.5);
					else if (varppos.y > cmd.value.y + 1)
						entity.move(0, -0.5);
				}

				if (cmd.key = "key") {
					var input = cmd.value;
					if (input == 'Up' || input == 'w')
						entity.move(0, -0.5);
					if (input == 'Down' || input == 's')
						entity.move(0, 0.5);
					if (input == 'Left' || input == 'a')
						entity.move(-0.5, 0);
					if (input == 'Right' || input == 'd')
						entity.move(0.5, 0);
				}
			}
		}
	}
});

module.exports = {
	EntityHelm : EntityHelm,
	AIEntityHelm : AIEntityHelm,
	PlayerEntityHelm : PlayerEntityHelm
}