
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var button3 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$('component2').myFunction();
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('component1').myFunction("test");
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/05_CustomFunction2.waComponent');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
// @endregion
};// @endlock
