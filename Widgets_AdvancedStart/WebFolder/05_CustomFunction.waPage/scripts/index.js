
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button3 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/05_CustomFunction2.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
