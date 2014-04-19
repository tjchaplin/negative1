var assert = require('assert');
var Scarlet = require('scarlet');

describe('Given loading negative1 as a scarlet plugin',function(){
	it("should be able to load as a Scarlet plugin",function(){
		var loadedPlugin = true;

		try{ 
			var scarlet = new Scarlet("../lib");
			var negative1 = scarlet.plugins.negative1;

		}catch(exception){
			loadedPlugin = false;
		}

		assert(loadedPlugin,"Plugin wasn't loaded properly and throw an exception");
	});
});