var assert = require('assert');
var Scarlet = require('scarlet');

describe('Given using negative1 with a named function',function(){
	var scarlet = new Scarlet("../lib");
	var negative1 = scarlet.plugins.negative1;

	describe('Given a method with two parameters',function(){
		var parameter1 = null;
		var parameter2 = null;

		function NamedFunction(){
			this.methodWith2Args = function methodWith2Args(arg1,arg2){
				parameter1 = arg1;
				parameter2 = arg2;
			};
		}
		
		var instance = new NamedFunction();
		negative1.ensureCallback(instance,'methodWith2Args',[1]);
		
		beforeEach(function(){
			parameter1 = null;
			parameter2 = null;
		});

		describe('When method is called with only a callback function',function(){

			it("Should call method with callback as last parameter",function(){
				var callback = function(){};
				instance.methodWith2Args(callback);
				assert(parameter2 === callback);
			});

			it("Should call method with default parameter for the first parameter",function(){
				var callback = function(){};
				instance.methodWith2Args(callback);
				assert(parameter1 === 1);
			});
		});


		describe('When method is called with both parameters',function(){

			it("Should call method with callback as last parameter",function(){
				var callback = function(){};
				instance.methodWith2Args("anyValue",callback);
				assert(parameter2 === callback);
			});

			it("Should call method with parameter for the first parameter",function(){
				var callback = function(){};
				instance.methodWith2Args("anyValue",callback);
				assert(parameter1 === "anyValue");
			});
		});


		describe('When method is called with no parameters',function(){

			it("Should throw an exception",function(){
				var exceptionThrown = false;
				try{
					instance.methodWith2Args();
				}catch(exception){
					exceptionThrown = true;
				}
				
				assert(exceptionThrown);
			});
		});
	});
});
