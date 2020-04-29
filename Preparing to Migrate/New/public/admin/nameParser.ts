angular.module('app').service(
	'nameParser',
	class NameParser {
		constructor() {}
		parse(blobInput) {
			let lines = blobInput.split(/\r?\n/);
			lines.forEach(function(line, idx) {
				let pieces = line.split('|');
				lines[idx] = {
					email: pieces[0],
					firstName: pieces[1],
					lastName: pieces[2],
				};
			});
			return lines;
		}
	},
);
