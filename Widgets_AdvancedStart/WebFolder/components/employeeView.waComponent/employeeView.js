
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'employeeView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var dataGrid2 = {};	// @dataGrid
	// @endregion// @endlock

	// eventHandlers// @lock

	dataGrid2.onRowClick = function dataGrid2_onRowClick (event)// @startlock
	{// @endlock
		var category = $comp.sources.employees.category;
		if(category != null){
			var url = '/components/categoryViews/' + category + '.waComponent';
			$$(getHtmlId('memberActions')).loadComponent(url);
		} else {
			$$(getHtmlId('memberActions')).removeComponent();
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_dataGrid2", "onRowClick", dataGrid2.onRowClick, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
