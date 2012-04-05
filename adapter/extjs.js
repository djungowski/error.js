/**
 * Ext JS Adapter
 * Sends the error message via AJAX to a defined URL
 *
 * Possible Adapter options:
 *   url: The URL to send the error message to
 *   method: The method to use when sending the error message to the defined url
 *
 * @author djungowski
 */
ErrorJS.Adapter.Extjs = function(options) {
	this.setOptions(options);
};

// Extending the abstract implementation
ErrorJS.Adapter.Extjs.prototype = new ErrorJS.Adapter();

/**
 * Handle the error by sending it to a URL
 * 
 * @var Object errorDetails
 */
ErrorJS.Adapter.Extjs.prototype.handleError = function(errorDetails) {
	Ext.Ajax.request({
		url: this.options.url,
		method: this.options.method,
		params: errorDetails
	});
}
