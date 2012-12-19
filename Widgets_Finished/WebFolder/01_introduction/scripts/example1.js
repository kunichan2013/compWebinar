
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var employeesViewButton = {};	// @button
	var personViewButton = {};	// @button
	var companyViewButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/titlePages/title.waComponent');
	};// @lock

	employeesViewButton.click = function employeesViewButton_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/employeeView.waComponent');
	};// @lock

	personViewButton.click = function personViewButton_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/personView.waComponent');
	};// @lock

	companyViewButton.click = function companyViewButton_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent('/components/companyView.waComponent');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('explorerTitle_text').setValue('Introduction');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("employeesViewButton", "click", employeesViewButton.click, "WAF");
	WAF.addListener("personViewButton", "click", personViewButton.click, "WAF");
	WAF.addListener("companyViewButton", "click", companyViewButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
