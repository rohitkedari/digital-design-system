const npm = require('npm');

npm.load(() => {
	let componentName = '';
	let filteredArgv = process.argv.slice(2);
	if (filteredArgv && filteredArgv.length > 0) {
		filteredArgv = filteredArgv.filter((arg) => {
			if (arg.indexOf('--component') > -1) {
				[, componentName] = arg.split('=');
				return false;
			}
			return true;
		});
	}
	const options = componentName
		? [
				`./src/components/${componentName}/__tests__/.*\\.test\\.js`,
				'--json',
				`--outputFile=./src/components/${componentName}/__tests__/${componentName}-test-results.json`,
				...filteredArgv,
		  ]
		: [
				'--json',
				'--outputFile=./tests/jest-test-results.json',
				...filteredArgv,
		  ];
	npm.run('jest', ...options);
});
