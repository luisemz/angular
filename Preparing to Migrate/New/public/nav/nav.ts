angular.module('app').component('nav', {
	templateUrl: '/nav/nav.html',
	bindings: {},
	controller: class Nav {
		currentUser: any;
		unreviewedSessionCount: any;

		constructor(currentIdentity, unreviewedSessionCount) {
			this.currentUser = currentIdentity.currentUser;
			this.unreviewedSessionCount = unreviewedSessionCount;
			this.unreviewedSessionCount.updateUnreviewedSessionCount();
		}
	}
});
