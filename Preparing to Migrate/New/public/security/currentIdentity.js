angular.module('app').service('currentIdentity', (function () {
    function CurrentIdentityService($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.currentUser = null;
    }
    CurrentIdentityService.prototype.setUser = function (user) {
        this.currentUser = user;
    };
    CurrentIdentityService.prototype.clearUser = function () {
        this.currentUser = null;
    };
    CurrentIdentityService.prototype.authenticated = function () {
        return !!this.currentUser;
    };
    CurrentIdentityService.prototype.updateUser = function (newUserObj) {
        var _this = this;
        var dfd = this.$q.defer();
        this.$http.put('/api/users/' + this.currentUser.id, newUserObj).then(function (response) {
            _this.currentUser.firstName = newUserObj.firstName;
            _this.currentUser.lastName = newUserObj.lastName;
            dfd.resolve();
        }, function (response) {
            dfd.reject('Error Logging Out');
        });
        return dfd.promise;
    };
    return CurrentIdentityService;
}()));
//# sourceMappingURL=currentIdentity.js.map