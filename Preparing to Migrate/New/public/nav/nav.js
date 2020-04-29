angular.module('app').component('nav', {
    templateUrl: '/nav/nav.html',
    bindings: {},
    controller: (function () {
        function Nav(currentIdentity, unreviewedSessionCount) {
            this.currentUser = currentIdentity.currentUser;
            this.unreviewedSessionCount = unreviewedSessionCount;
            this.unreviewedSessionCount.updateUnreviewedSessionCount();
        }
        return Nav;
    }())
});
//# sourceMappingURL=nav.js.map