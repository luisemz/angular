angular.module('app').component('profile', {
	templateUrl: '/profile/profile.html',
	bindings: {},
	controller: class Profile {
		$location: any;
		toastr: any;
		currentIdentity: any;
		profile: any;

		constructor($location, toastr, currentIdentity) {
			this.$location = $location;
			this.toastr = toastr;
			this.currentIdentity = currentIdentity;
			this.profile = angular.copy(currentIdentity.currentUser);
		}
		save() {
			this.currentIdentity.updateUser(this.profile);
			this.toastr.success('Profile Saved!');
		}
		cancel() {
			this.$location.path('/home');
		}
	}
});
