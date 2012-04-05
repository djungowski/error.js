var ErrorJS;

ErrorJS = function() {
};

ErrorJS.options = {
	supressErrors: false,
	adapter: 'console'
};

ErrorJS.setOptions = function(options) {
	for (var option in options) {
		ErrorJS.options[option] = options[option];
	}
};

ErrorJS.adapter = null;

ErrorJS.getAdapter = function() {
	var adapterName;

	if (ErrorJS.adapter === null) {
		adapterName = 'ErrorJS.Adapter.';
		// console => Console
		adapterName += ErrorJS.options.adapter.charAt(0).toUpperCase() + ErrorJS.options.adapter.slice(1);
		ErrorJS.adapter = new ErrorJS.Adapter['Console'];
	}
	return ErrorJS.adapter;
};

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

ErrorJS.Adapter = function() {
};

ErrorJS.Adapter.prototype.handleError = function(message, url, line) {
    // Implement Error Handling in subclass here
};

ErrorJS.Adapter.prototype.formatErrorMessage = function(errorMessage, errorDetails) {
    errorMessage = errorMessage.replace('{1}', errorDetails.message);
    errorMessage = errorMessage.replace('{2}', errorDetails.url);
    errorMessage = errorMessage.replace('{3}', errorDetails.line);
    return errorMessage;
};

window.onerror = ErrorJS.handleError;
