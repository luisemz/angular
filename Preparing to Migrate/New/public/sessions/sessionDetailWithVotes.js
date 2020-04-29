angular.module('app').component('sessionDetailWithVotes', {
    templateUrl: '/sessions/sessionDetailWithVotes.html',
    bindings: {
        session: '=',
        initialCollapsed: '@'
    },
    controller: (function () {
        function SessionDetailWithVotes() {
        }
        return SessionDetailWithVotes;
    }())
});
//# sourceMappingURL=sessionDetailWithVotes.js.map