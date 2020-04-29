angular.module('app').component('createNewSession', {
	templateUrl: '/home/createNewSession.html',
	bindings: {
		userSessions: '='
	},
	controller: class CreateNewSession {
		toastr: any;
		currentIdentity: any;
		sessions: any;
		userSessions: any;
		title: string;
		length: string;
		abstract: string;

		constructor(toastr, currentIdentity, sessions) {
			this.toastr = toastr;
			this.currentIdentity = currentIdentity;
			this.sessions = sessions;
		}
		create() {
			let newUserSession = {
				title: this.title,
				length: parseInt(this.length),
				abstract: this.abstract,
				userFirstName: this.currentIdentity.currentUser.firstName,
				userLastName: this.currentIdentity.currentUser.lastName,
				userId: this.currentIdentity.currentUser.id
			};

			this.sessions.createNewSession(newUserSession).then(response => {
				console.log(response);
				this.userSessions.push(response.data);
			});
		}
	}
});
