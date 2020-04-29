angular.module('app').component('adminLogin', {
    templateUrl: '/admin/adminLogin.html',
    bindings: {},
    controller: (function () {
        function AdminLogin($location, currentIdentity, auth, toastr) {
            this.$location = $location;
            this.currentIdentity = currentIdentity;
            this.auth = auth;
            this.toastr = toastr;
            this.loggedIn = currentIdentity.authenticated();
            if (this.loggedIn) {
                $location.path('/home');
            }
        }
        AdminLogin.prototype.login = function () {
            var _this = this;
            this.auth
                .login({
                username: this.email,
                password: this.password,
            })
                .then(function () {
                _this.$location.path('/home');
            }, function (err) {
                _this.toastr.error(err);
            });
        };
        return AdminLogin;
    }()),
});
//# sourceMappingURL=adminLogin.js.map