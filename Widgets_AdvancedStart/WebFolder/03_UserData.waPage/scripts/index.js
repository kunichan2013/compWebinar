
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button4 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		$$('component4').loadComponent({
			path: '/components/03_UserData.waComponent',
			userData: {
				doSomething: function(){
					alert('This was passed in from the interface page');
				}
			}
			
		});
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$('component2').loadComponent({
			path: '/components/03_UserData.waComponent',
			userData: {initID: "981FE804061D234398EFFEEBD9C7D072", industry: "Technology"}
			
		});
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//Growth Fund ID is 981FE804061D234398EFFEEBD9C7D072
		
		$$('component1').loadComponent({
			path: '/components/03_UserData.waComponent',
			userData: {initID: "981FE804061D234398EFFEEBD9C7D072"}
			
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
