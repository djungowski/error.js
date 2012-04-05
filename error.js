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

ErrorJS.handleError = function(message, url, line) {
	return ErrorJS.options.supressErrors;
};

window.onerror = ErrorJS.handleError;
