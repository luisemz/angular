angular.module('app').component('adminLogin', {
	templateUrl: '/admin/adminLogin.html',
	bindings: {},
	controller: class AdminLogin {
		$location: any;
		currentIdentity: any;
		auth: any;
		toastr: any;
		loggedIn: any;
		email: string;
		password: string;

		constructor($location, currentIdentity, auth, toastr) {
			this.$location = $location;
			this.currentIdentity = currentIdentity;
			this.auth = auth;
			this.toastr = toastr;
			this.loggedIn = currentIdentity.authenticated();

			if (this.loggedIn) {
				$location.path('/home');
			}
		}
		login() {
			this.auth
				.login({
					username: this.email,
					password: this.password,
				})
				.then(
					() => {
						this.$location.path('/home');
					},
					err => {
						this.toastr.error(err);
					},
				);
		}
	},
});
