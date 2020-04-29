angular.module('app').component('logout', {
	bindings: {},
	controller: class LogoutCtrl {
		constructor($location, auth) {
			auth.logout();
			$location.path('/login');
		}
	},
});
