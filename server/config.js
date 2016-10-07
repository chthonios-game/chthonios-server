/* config polyfill */
var config = config || {};

config.debug = {};

/** Classloading debug */
config.debug.classes = {};
config.debug.classes.dictionary_create = process.env.DEBUG_DICT_CREATE || false;
config.debug.classes.dictionary_usage = process.env.DEBUG_DICT_USE || false;

/** Class definintion debugging */
config.debug.classes.define = process.env.DEBUG_CLASS_DEFN || false;
config.debug.classes.structure = process.env.DEBUG_CLASS_STR || false;
config.debug.classes.cfr = process.env.DEBUG_CLASS_CFR || false;
config.debug.classes.call = process.env.DEBUG_CLASS_EXEC || false;

module.exports = config;