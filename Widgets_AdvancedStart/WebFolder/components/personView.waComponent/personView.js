
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'personView';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var search = {};	// @textField
	var dataGrid1 = {};	// @dataGrid
	var previous = {};	// @buttonImage
	var next = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	search.keyup = function search_keyup (event)// @startlock
	{// @endlock
		sources.component1_person.query('firstName = :1', $$(getHtmlId('search')).getValue() + '*');
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		$$(getHtmlId('membershipActions')).loadComponent('/components/categoryViews/' + $comp.sources.person.category + '.waComponent');
	};// @lock

	previous.click = function previous_click (event)// @startlock
	{// @endlock
		$comp.sources.person.selectPrevious();
	};// @lock

	next.click = function next_click (event)// @startlock
	{// @endlock
		$comp.sources.person.selectNext();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_search", "keyup", search.keyup, "WAF");
	WAF.addListener(this.id + "_dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener(this.id + "_previous", "click", previous.click, "WAF");
	WAF.addListener(this.id + "_next", "click", next.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
