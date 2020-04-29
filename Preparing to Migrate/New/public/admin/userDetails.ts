angular.module('app').component('userDetails', {
	templateUrl: '/admin/userDetails.html',
	bindings: {
		allUsers: '=',
	},
	controller: class UserDetails {
		user: any;
		allUsers: any;

		constructor($routeParams) {
			this.user = this.allUsers.find(user => {
				return user.id === parseInt($routeParams.id);
			});
		}
	},
});
