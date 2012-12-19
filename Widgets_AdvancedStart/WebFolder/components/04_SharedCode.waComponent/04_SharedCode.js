
(function Component (id) {// @lock

// Add the code that needs to be shared between components here
var sharedVar = "test";

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = '04_SharedCode';
	// @endregion// @endlock
	
	this.setSharedVar = function(value){
		sharedVar = value;
	}
	
	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		alert(sharedVar);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_button1", "click", button1.click, "WAF");
	// @endregion// @endlock

	};// @lock

}// @startlock
return constructor;
})();// @endlock
