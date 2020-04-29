angular.module('app').component('results', {
    templateUrl: '/admin/results.html',
    bindings: {
        sessionsByVoteDesc: '=allSessions',
    },
    controller: (function () {
        function Result() {
            this.sessionsByVoteDesc.sort(function (session1, session2) {
                return session2.voteCount - session1.voteCount;
            });
        }
        return Result;
    }()),
});
//# sourceMappingURL=results.js.map