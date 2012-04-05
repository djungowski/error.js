var ErrorJS;

ErrorJS = function() {
};

/**
 * error.js Options
 *
 * @var Object
 */
ErrorJS.options = {
	supressErrors: false,
	adapter: 'console',
	adapterOptions: {}
};

/**
 * Set error.js Options
 *
 * Possible options:
 *  supressErrors: Suppress the default Javascript error (defaults to false)
 *  adapter: Which Error Adapter to use (defaults to 'console')
 *
 * @var Object options
 *
 */
ErrorJS.setOptions = function(options) {
	for (var option in options) {
		ErrorJS.options[option] = options[option];
	}
};

/**
 * The Error Adapter, which can be configured with setOptions()
 *
 * @var ErrorJS.Adapter
 */
ErrorJS.errorAdapter = null;

/**
 * Get the configured Error Adapter
 * 
 * @return ErrorJS.Adapter
 */
ErrorJS.getAdapter = function() {
	var adapterName;

	if (ErrorJS.errorAdapter === null) {
		// console => Console
		adapterName = ErrorJS.options.adapter.charAt(0).toUpperCase() + ErrorJS.options.adapter.slice(1);
		ErrorJS.errorAdapter = new ErrorJS.Adapter[adapterName](ErrorJS.options.adapterOptions);
	}
	return ErrorJS.errorAdapter;
};

/**
 * Error Handler that handles all the errors that occur on a webpage
 * and passes it on to the adapter
 *
 * @var String message
 * @var String url
 * @var Number line
 */
ErrorJS.handleError = function(message, url, line) {
	var errorDetails;

	errorDetails = {
		message: message,
		url: url,
		line: line
	};

	ErrorJS.getAdapter().handleError(errorDetails);
	return ErrorJS.options.supressErrors;
};

/**
 * The abstract adapter implementation
 *
 */
ErrorJS.Adapter = function(options) {
	this.setOptions(options);
};

/**
 * Adapter Options
 *
 * @var Object
 */
ErrorJS.Adapter.prototype.options = {};

/**
 * Set Adapter Options
 * Possible Options depend on the adapter
 *
 * @var Object options
 */
ErrorJS.Adapter.prototype.setOptions = function(options) {
	this.options = options;
};

/**
 * Handle the error
 *
 * errorDetails contains the following keys:
 *   message: The error message
 *   url: The file the error occured in
 *   line: The line the error occured in
 * 
 * @var Object errorDetails
 */
ErrorJS.Adapter.prototype.handleError = function(errorDetails) {
    // Implement Error Handling in subclass here
};

/**
 * Format the error message by replacing
 *   {1} with the error message
 *   {2} with the file
 *   {3} with the line
 *
 * @var String errorMessage
 * @var Object errorDetails
 * @return String
 */
ErrorJS.Adapter.prototype.formatErrorMessage = function(errorMessage, errorDetails) {
    errorMessage = errorMessage.replace('{1}', errorDetails.message);
    errorMessage = errorMessage.replace('{2}', errorDetails.url);
    errorMessage = errorMessage.replace('{3}', errorDetails.line);
    return errorMessage;
};

// Register the error handler for the web application
window.onerror = ErrorJS.handleError;
