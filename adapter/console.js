/**
 * This is implementation is an example
 * 
 */
ErrorJS.Adapter.Console = function(options) {
	this.setOptions(options);
};

// Inherit from abstract implementation
ErrorJS.Adapter.Console.prototype = new ErrorJS.Adapter();

/**
 * Handle the Javascript error by writing it formatted to the console
 * 
 * @var Object errorDetails
 */
ErrorJS.Adapter.Console.prototype.handleError = function(errorDetails) {
	var errorMessage;

	errorMessage = '"{1}" in "{2}" on line {3}';
	errorMessage = this.formatErrorMessage(errorMessage, errorDetails);
	console.error(errorMessage);
};
