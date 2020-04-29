angular.module('app').component('createUsers', {
	templateUrl: '/admin/createUsers.html',
	bindings: {},
	controller: class CreateUSers {
		nameParser: any;
		users: any;
		toastr: any;
		namesblob: any;

		constructor(nameParser, users, toastr) {
			this.nameParser = nameParser;
			this.users = users;
			this.toastr = toastr;
		}
		import() {
			var people = this.nameParser.parse(this.namesblob);
			people.forEach(person => {
				this.users
					.createNewUser({
						email: person.email,
						password: 'pass',
						firstName: person.firstName,
						lastName: person.lastName,
					})
					.catch(error => {
						this.toastr.error(`User already exists: ${person.email}`);
					});
			});

			this.toastr.success('Users Created!');
		}
	},
});
