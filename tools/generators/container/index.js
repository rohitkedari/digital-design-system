module.exports = {
	description: 'create container',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What is name of container?',
		},
	],
	actions: () => {
		return [
			{
				type: 'add',
				path:
					'../../src/container/{{properCase name}}/{{properCase name}}.js',
				templateFile: './container/container.js.hbs',
				abortOnFail: true,
			},
		];
	},
};
