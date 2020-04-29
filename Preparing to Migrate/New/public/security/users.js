angular.module('app').service('users', (function () {
    function UsersService($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    UsersService.prototype.createNewUser = function (newUser) {
        return this.$http.post('/api/users', newUser);
    };
    UsersService.prototype.getAllUsers = function () {
        var dfd = this.$q.defer();
        this.$http.get('/api/users').then(function (response) {
            dfd.resolve(response.data);
        });
        return dfd.promise;
    };
    return UsersService;
}()));
//# sourceMappingURL=users.js.map