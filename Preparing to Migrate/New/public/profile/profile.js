angular.module('app').component('profile', {
    templateUrl: '/profile/profile.html',
    bindings: {},
    controller: (function () {
        function Profile($location, toastr, currentIdentity) {
            this.$location = $location;
            this.toastr = toastr;
            this.currentIdentity = currentIdentity;
            this.profile = angular.copy(currentIdentity.currentUser);
        }
        Profile.prototype.save = function () {
            this.currentIdentity.updateUser(this.profile);
            this.toastr.success('Profile Saved!');
        };
        Profile.prototype.cancel = function () {
            this.$location.path('/home');
        };
        return Profile;
    }())
});
//# sourceMappingURL=profile.js.map