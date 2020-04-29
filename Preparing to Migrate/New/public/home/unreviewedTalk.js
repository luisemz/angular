angular.module('app').component('unreviewedTalk', {
    templateUrl: '/home/unreviewedTalk.html',
    bindings: {
        session: '=',
        voteYes: '&',
        voteNo: '&'
    },
    controller: (function () {
        function UnreviewedTalk() {
        }
        UnreviewedTalk.prototype.yes = function () {
            this.voteYes();
        };
        UnreviewedTalk.prototype.no = function () {
            this.voteNo();
        };
        return UnreviewedTalk;
    }())
});
//# sourceMappingURL=unreviewedTalk.js.map