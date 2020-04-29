(function() {
	var toastrModule = angular.module('toastr', []);

	toastr.options.timeOut = 3000;

	toastrModule.value('toastr', toastr);
})();
