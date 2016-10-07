'use strict';

// var keypress = require('keypress');

var preferences = require("./config.prefs.js");

var con = ClassBuilder({
	rc : null,
	ic : null,
	
	init : function(rc, ic) {
		this.rc = rc;
		this.ic = ic;
	},
	
	_score : function(l) {
		switch (l) {
		case "error": return 10;
		case "warn" : return 7;
		case "info" : return 5;
		case "log"  : return 3;
		case "trace": return 1;
		default: return 0;
		}
	},
	
	_log : function(level, datum) {
		if (this.rc !== null)
			this._logStream(level, "console", this.rc, datum);
		if (this.ic !== null) 
			this._logStream(level, "file", this.ic, datum);
	},
	
	_logStream : function(level, si, s, datum) {
		var ll = this._score(level), iq = this._score(config.prefs.log[si + "_level"]);
		if (ll >= iq)
			s[level].apply(s, datum);
	},

	error : function() {
		this._log("error", arguments);
	},

	warn : function() {
		this._log("warn", arguments);
	},

	info : function() {
		this._log("info", arguments);
	},

	log : function() {
		this._log("log", arguments);
	},

	trace : function() {
		this._log("trace", arguments);
	}

});
con.prototype = console;


var rc = console, ic = null;
if (config.prefs.log.file) {
	ic = new console.Console(fs.createWriteStream('./stdout.log'), 
			fs.createWriteStream('./stderr.log'));
}
var conInst = new con(rc, ic);

module.exports = conInst;