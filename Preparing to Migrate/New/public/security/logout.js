angular.module('app').component('logout', {
    bindings: {},
    controller: (function () {
        function LogoutCtrl($location, auth) {
            auth.logout();
            $location.path('/login');
        }
        return LogoutCtrl;
    }()),
});
//# sourceMappingURL=logout.js.map