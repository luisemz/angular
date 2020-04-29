angular.module('app').component('userDetails', {
    templateUrl: '/admin/userDetails.html',
    bindings: {
        allUsers: '=',
    },
    controller: (function () {
        function UserDetails($routeParams) {
            this.user = this.allUsers.find(function (user) {
                return user.id === parseInt($routeParams.id);
            });
        }
        return UserDetails;
    }()),
});
//# sourceMappingURL=userDetails.js.map