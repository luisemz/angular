angular.module('app').component('sessionDetail', {
    templateUrl: '/sessions/sessionDetail.html',
    bindings: {
        session: '=',
        initialCollapsed: '@'
    },
    controller: (function () {
        function SessionDetail() {
        }
        return SessionDetail;
    }())
});
//# sourceMappingURL=sessionDetail.js.map