angular.module('app').component('detailPanel', {
	transclude: true,
	templateUrl: '/components/detailPanel.html',
	bindings: {
		title: '@',
		initialCollapsed: '@collapsed'
	},
	controller: class DetailPanel {
		collapsed: any;
		initialCollapsed: any;

		constructor() {
			this.collapsed = this.initialCollapsed === 'true';
		}
		collapse() {
			this.collapsed = !this.collapsed;
		}
	}
});
