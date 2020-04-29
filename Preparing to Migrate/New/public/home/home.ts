angular.module('app').component('home', {
	templateUrl: '/home/home.html',
	bindings: {
		userSessions: '='
	},
	controller: class Home {
		currentIdentity: any;
		sessions: any;
		toastr: any;
		unreviewedSessionCount: any;
		currentSessionToReview: any;
		currentUser: any;
		userSessions: any;

		constructor(currentIdentity, sessions, toastr, unreviewedSessionCount) {
			this.currentIdentity = currentIdentity;
			this.sessions = sessions;
			this.toastr = toastr;
			this.unreviewedSessionCount = unreviewedSessionCount;
			this.currentUser = currentIdentity.currentUser;

			this.setNextSessionToReview();
		}
		setNextSessionToReview() {
			this.sessions.getNextUnreviewedSession(this.currentIdentity.currentUser.id).then(response => {
				this.currentSessionToReview = response.data;
			});
		}
		voteYes() {
			this.sessions
				.incrementVote(this.currentSessionToReview.id)
				.then(() => this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
				.then(() => {
					this.setNextSessionToReview();

					// pull updated value
					this.unreviewedSessionCount.updateUnreviewedSessionCount();
				});
		}
		voteNo() {
			this.sessions.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id).then(() => {
				this.setNextSessionToReview();

				// pull updated value
				this.unreviewedSessionCount.updateUnreviewedSessionCount();
			});
		}
	}
});
