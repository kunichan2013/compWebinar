
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var createTabButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	createTabButton.click = function createTabButton_click (event)// @startlock
	{// @endlock
		$$('tabView1').addTab($$('tabView1').countTabs(), true);
		var currentTab = $$('tabView1').getSelectedTab();
		var tabContainerID = $$('tabView1').getTabContainer(currentTab.index).id;
		
		var domID = 'c' + Math.floor(Math.random()*100000 + 1);
		var componentDOM = document.createElement('div');
		componentDOM.setAttribute('id', domID);
		document.body.appendChild(componentDOM);
     
		var componentWidget = new WAF.widget.Component({
			'id': domID,
			'data-type': 'component',
			'data-lib': 'WAF',
			'data-constraint-top': 'true',
			'data-constraint-right': 'true',
			'data-constraint-left': 'true',
			'data-constraint-bottom': 'true',
			'class': 'waf-widget waf-component default inherited'
		});
		
		$$(tabContainerID).addChild(componentWidget);
		componentWidget.loadComponent($$('tabType').getValue());
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("createTabButton", "click", createTabButton.click, "WAF");
// @endregion
};// @endlock
