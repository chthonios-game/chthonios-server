var Common = require("./common.js");
var fs = require('fs');
var mkdirp = require('mkdirp');

var Nodegraph = require("./math/nodegraph.js");




/**
 * Base world storage engine (JSON map storage only).
 */
var WorldStorage = Common.Class.extend({

	saveWorld : function(worldObj) {

	},

	recallWorld : function(worldUid) {

	}

});

/**
 * Extended server storage engine (full world data files, plus JSON map storage
 * as per base world storage).
 */
var ExtendedWorldStorage = WorldStorage.extend({
	// TODO: Extended storage
	saveWorld : function(worldObj) {
		return this._super(worldObj);
	},
	recallWorld : function(worldUid) {
		return this._super(worldUid);
	}
});

module.exports = {
	WorldStorage : WorldStorage,
	WorldStorageException : WorldStorageException,
	ExtendedWorldStorage : ExtendedWorldStorage
}