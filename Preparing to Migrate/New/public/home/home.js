angular.module('app').component('home', {
    templateUrl: '/home/home.html',
    bindings: {
        userSessions: '='
    },
    controller: (function () {
        function Home(currentIdentity, sessions, toastr, unreviewedSessionCount) {
            this.currentIdentity = currentIdentity;
            this.sessions = sessions;
            this.toastr = toastr;
            this.unreviewedSessionCount = unreviewedSessionCount;
            this.currentUser = currentIdentity.currentUser;
            this.setNextSessionToReview();
        }
        Home.prototype.setNextSessionToReview = function () {
            var _this = this;
            this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then(function (response) {
                _this.currentSessionToReview = response.data;
            });
        };
        Home.prototype.voteYes = function () {
            var _this = this;
            this.sessions
                .incrementVote(this.currentSessionToReview.id)
                .then(function () { return _this.sessions.addReviewedSession(_this.currentUser.id, _this.currentSessionToReview.id); })
                .then(function () {
                _this.setNextSessionToReview();
                _this.unreviewedSessionCount.updateUnreviewedSessionCount();
            });
        };
        Home.prototype.voteNo = function () {
            var _this = this;
            this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id).then(function () {
                _this.setNextSessionToReview();
                _this.unreviewedSessionCount.updateUnreviewedSessionCount();
            });
        };
        return Home;
    }())
});
//# sourceMappingURL=home.js.map