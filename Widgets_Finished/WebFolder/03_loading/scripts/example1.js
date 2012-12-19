
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var employeesButton = {};	// @button
	var companyButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	employeesButton.click = function employeesButton_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/employeeView.waComponent');

	};// @lock

	companyButton.click = function companyButton_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/companyView.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('explorerTitle_text').setValue('Explorer Title');
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("employeesButton", "click", employeesButton.click, "WAF");
	WAF.addListener("companyButton", "click", companyButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
