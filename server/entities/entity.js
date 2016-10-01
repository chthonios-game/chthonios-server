var Common = require("../common.js");
var HelmModel = require("../logic/helms.js");

var Entity = Common.Class.extend({
	init : function(type, x, y) {
		this.id = 0;
		this.x = x;
		this.y = y;
		this.type = type;
		this.helm = new HelmModel.EntityHelm();
	},

	move : function(dx, dy) {
		this.x += dx;
		this.y += dy;
	},

	setPosition : function(x, y) {
		this.x = x;
		this.y = y;
	},

	getPosition : function() {
		return {
			x : this.x,
			y : this.y
		};
	},

	getPacket : function() {
		return {
			id : this.id,
			x : this.x,
			y : this.y,
			type : this.type
		};
	},

	update : function() {
		this.helm.update(this);
	}
});

var EntityLiving = Entity.extend({
	init : function(type, x, y, h) {
		this._super(type, x, y);
		this.health = h;
		this.maxHealth = h;
	},

	getPacket : function() {
		var packet = this._super();
		packet.health = this.health;
		packet.maxHealth = this.maxHealth;
		return packet;
	}
});

module.exports = {
	HelmModel : HelmModel,
	Entity : Entity,
	EntityLiving : EntityLiving
}