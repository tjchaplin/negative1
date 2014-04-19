var assert = require("assert");
var ForceCallbackInterceptor = require("./forceCallbackInterceptor");

var negative1 = module.exports = exports = function(scarlet){
	var self = this;

	assert(scarlet,"Scarlet === null");

	self.initialize = function(){
		scarlet.plugins.negative1 = self;
		return self;
	};
	
	self.ensureCallback = function(target, methodName, defaultValues){
		assert(target, "Method Target to ensure callback must be defined");
		
		if(methodName instanceof Array && !defaultValues){
			defaultValues = methodName;
			methodName = null;
		}

		var forceCallbackInterceptor = new ForceCallbackInterceptor(defaultValues);

		if(methodName)
			return scarlet.intercept(target,methodName).using(forceCallbackInterceptor).proxy();

		return scarlet.intercept(target).using(forceCallbackInterceptor).proxy();
	};
};