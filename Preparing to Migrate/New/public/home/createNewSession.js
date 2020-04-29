angular.module('app').component('createNewSession', {
    templateUrl: '/home/createNewSession.html',
    bindings: {
        userSessions: '='
    },
    controller: (function () {
        function CreateNewSession(toastr, currentIdentity, sessions) {
            this.toastr = toastr;
            this.currentIdentity = currentIdentity;
            this.sessions = sessions;
        }
        CreateNewSession.prototype.create = function () {
            var _this = this;
            var newUserSession = {
                title: this.title,
                length: parseInt(this.length),
                abstract: this.abstract,
                userFirstName: this.currentIdentity.currentUser.firstName,
                userLastName: this.currentIdentity.currentUser.lastName,
                userId: this.currentIdentity.currentUser.id
            };
            this.sessions.createNewSession(newUserSession).then(function (response) {
                console.log(response);
                _this.userSessions.push(response.data);
            });
        };
        return CreateNewSession;
    }())
});
//# sourceMappingURL=createNewSession.js.map