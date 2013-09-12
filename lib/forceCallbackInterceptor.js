module.exports = function ForceCallbackInterceptor(defaultValues){
	var self = this;

	if(!defaultValues)
		defaultValues = [];

	self.getActualParameterLength = function(method){
		var params = method.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
			      				.replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
			      				.split(',');
		return params.length;
	};

	self.setLastArgToCallback = function(invocation, calledArgs){
		var paramatersLength = self.getActualParameterLength(invocation.method);

		for (var i = 0; i < paramatersLength-1; i++) {
			var argToCall = null;

			if(calledArgs.length > i && calledArgs.length-1 !== i)
				argToCall = calledArgs[i];
			else if(defaultValues.length > i)
				argToCall = defaultValues[i];

			invocation.args[i] = argToCall;
		}

		invocation.args[paramatersLength-1] = calledArgs[calledArgs.length-1];
		invocation.args.length = paramatersLength;
	};

	return function(proceed, invocation){
		
		var calledArgs = Array.prototype.slice.call(invocation.args);

		if(calledArgs.length === 0)
			throw new Error("Method must be called with at least one parameter");

		self.setLastArgToCallback(invocation,calledArgs);
		proceed();
	}
}