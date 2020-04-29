angular.module('app').component('unreviewedTalk', {
	templateUrl: '/home/unreviewedTalk.html',
	bindings: {
		session: '=',
		voteYes: '&',
		voteNo: '&'
	},
	controller: class UnreviewedTalk {
		voteYes: any;
		voteNo: any;

		constructor() {}
		yes() {
			this.voteYes();
		}

		no() {
			this.voteNo();
		}
	}
});
