angular.module('app').component('results', {
	templateUrl: '/admin/results.html',
	bindings: {
		sessionsByVoteDesc: '=allSessions',
	},
	controller: class Result {
		sessionsByVoteDesc: any;
		constructor() {
			this.sessionsByVoteDesc.sort((session1, session2) => {
				// reverse order
				return session2.voteCount - session1.voteCount;
			});
		}
	},
});
