/* config polyfill */
var config = config || {};

/**
 * <p>
 * User preferences configuration file.
 * </p>
 * 
 * <p>
 * Configuration in this file is a per-user configuration or relates
 * specifically to the environment in which the server is running.
 * </p>
 * 
 * <p>
 * Some options have values which must be configured. In this case, the option
 * should be configured either with one of the following formats:
 * 
 * <pre>
 * var config.[option] = null || [default]; // default
 * var config.[option] = [user-value] || [default]; // user-value
 * </pre>
 * 
 * </p>
 * 
 * <p>
 * It is recommended you do not remove the defaults information, in case you
 * need to restore the default values later.
 * </p>
 */
config.prefs = {};

config.prefs.log = {};
config.prefs.log.console = null || true;
config.prefs.log.console_level = null || "info";
config.prefs.log.file = null || true;
config.prefs.log.file_level = null || "all";