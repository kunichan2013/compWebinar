
(function Component (id) {// @lock
debugger; //Common to all web components of this type
// Add the code that needs to be shared between components here

function constructor (id) {
	debugger; //Constructor
	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = '01_Lifecycle';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	debugger; //On Load event
	// @region namespaceDeclaration// @startlock
	var companyEvent = {};	// @dataSource
	// @endregion// @endlock
	
	// eventHandlers// @lock

	companyEvent.onBeforeCurrentElementChange = function companyEvent_onBeforeCurrentElementChange (event)// @startlock
	{// @endlock
		debugger; //Datasource intialized
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_company", "onBeforeCurrentElementChange", companyEvent.onBeforeCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
