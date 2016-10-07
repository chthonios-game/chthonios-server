var vec2 = {

	__trycast : function(param0, param1) {
		if (isNumber(param0) && isNumber(param1))
			return {
				x : param0,
				y : param1
			};
		else if (param0 instanceof Object && param1 == null) {
			if (param0.hasOwnProperty("x") && param0.hasOwnProperty("y"))
				return param0;
			if (param0 instanceof Array && param0.length == 2)
				return {
					x : param0[0],
					y : param0[1]
				};
			return null;
		} else
			return null;
	},

	__checkcast : function(varargs) {
		if (varargs.length == 2)
			return [ this.__trycast(varargs[0]), this.__trycast(varargs[1]) ];
		else if (varargs.length == 3) {
			if (varargs[0] instanceof Object)
				return [ vec2.__trycast(varargs[0], null), vec2.__trycast(varargs[1], varargs[2]) ];
			else
				return [ vec2.__trycast(varargs[0], varargs[1]), vec2.__trycast(varargs[2], null) ];
		} else if (varargs.length == 4)
			return [ vec2.__trycast(varargs[0], varargs[1]), vec2.__trycast(varargs[2], varargs[3]) ];
		else
			throw new Error("Incorrect number of parameters to vec2fn, 2-4 accepted.");
	},
	
	__cast: function(varargs) {
		
	},

	add : function() {
		var args = vec2.__checkcast(arguments);
		
	}
}

var Vector3 = function(x, y, z) {

	this.identity = function() {
		return new Vector3(0, 0, 0);
	};

	this.x = x;
	this.y = y;
	this.z = z;

	this.clone = function() {
		return new Vector3(this.x, this.y, this.z);
	};

	this.len = function() {
		return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
	};

	this.unitV = function() {
		var il = this.len();
		if (len == 1)
			return this.copy();
		return new Vector3(this.x / il, this.y / il, this.z / il);
	}

	this.dotP = function(o) {
		return (this.x * o.x) + (this.y * o.y) + (this.z * o.z);
	};

	this.cross = function(o) {
		return new Vector3((this.y * o.z) - (this.z * o.y), (this.z * o.x - this.x * o.z), (this.x * o.y - this.y * o.x));
	};

	this.add = function(o) {
		this.x += o.x;
		this.y += o.y;
		this.z += o.z;
	};

	this.sub = function(o) {
		this.x -= o.x;
		this.y -= o.y;
		this.z -= o.z;
	};

	this.neg = function() {
		return new Vector3(-this.x, -this.y, -this.z);
	};

	this.mul = function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
}


module.exports = {
	vec2 : vec2,
	Vector3 : Vector3
}