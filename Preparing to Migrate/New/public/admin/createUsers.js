angular.module('app').component('createUsers', {
    templateUrl: '/admin/createUsers.html',
    bindings: {},
    controller: (function () {
        function CreateUSers(nameParser, users, toastr) {
            this.nameParser = nameParser;
            this.users = users;
            this.toastr = toastr;
        }
        CreateUSers.prototype.import = function () {
            var _this = this;
            var people = this.nameParser.parse(this.namesblob);
            people.forEach(function (person) {
                _this.users
                    .createNewUser({
                    email: person.email,
                    password: 'pass',
                    firstName: person.firstName,
                    lastName: person.lastName,
                })
                    .catch(function (error) {
                    _this.toastr.error("User already exists: " + person.email);
                });
            });
            this.toastr.success('Users Created!');
        };
        return CreateUSers;
    }()),
});
//# sourceMappingURL=createUsers.js.map