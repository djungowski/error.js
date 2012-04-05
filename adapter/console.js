ErrorJS.Adapter.Console = function() {
};

ErrorJS.Adapter.Console.prototype = new ErrorJS.Adapter();

ErrorJS.Adapter.Console.prototype.handleError = function(errorDetails) {
	var errorMessage;

	errorMessage = 'JavaScript error: "{1}" in "{2}" on line {3}';
	errorMessage = this.formatErrorMessage(errorMessage, errorDetails);
	console.log(errorMessage);
};
