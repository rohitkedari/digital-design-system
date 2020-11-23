const componentNameCheck = require('../utils/componentNameCheck');

module.exports = {
	description: 'Add a component to the app',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of the component?',
			default: 'Button',
			validate: (value) => {
				if (/.+/.test(value)) {
					return componentNameCheck(value)
						? 'That component already exists.'
						: true;
				}
				return 'The name is required.';
			},
		},
		{
			type: 'confirm',
			name: 'wantStyledComponents',
			default: false,
			message: 'Should the component use styled components?',
		},
		{
			type: 'confirm',
			name: 'wantPropTypes',
			default: false,
			message: 'Should the component have PropTypes?',
		},
		{
			type: 'recursive',
			name: 'props',
			message: 'Add a new prop?',
			when(answers) {
				// Only run if user set a name
				return answers.wantPropTypes;
			},
			prompts: [
				{
					type: 'input',
					name: 'name',
					message: "What is props's name?",
					validate(value) {
						if (/.+/.test(value)) {
							return true;
						}
						return 'prop name is required';
					},
				},
				{
					type: 'list',
					name: 'type',
					message: 'Choose prop type :',
					choices: [
						'string',
						'number',
						'bool',
						'func',
						'object',
						'array',
						'node',
						'element',
					],
					default: 'string',
				},
				{
					type: 'confirm',
					name: 'isRequired',
					default: false,
					message: 'is required prop?',
				},
				{
					type: 'input',
					name: 'defaultVal',
					message: 'What is default prop value?',
					when(answers) {
						// Only run if user set a name
						return !answers.isRequired;
					},
					validate(value) {
						if (/.+/.test(value)) {
							return true;
						}
						return 'prop name is required';
					},
				},
			],
		},
	],
	actions: (data) => {
		const actions = [
			{
				type: 'add',
				path:
					'../../src/components/{{properCase name}}/{{properCase name}}.js',
				templateFile: './component/component.js.hbs',
				abortOnFail: true,
			},
			{
				type: 'add',
				path: '../../src/components/{{properCase name}}/index.js',
				template: "export * from './{{properCase name}}';\r\n",
				abortOnFail: true,
			},
			{
				type: 'add',
				path:
					'../../src/components/{{properCase name}}/__tests__/{{properCase name}}.test.js',
				templateFile: './component/componentTest.js.hbs',
				abortOnFail: true,
			},
			{
				type: 'add',
				path:
					'../../src/components/{{properCase name}}/__tests__/{{properCase name}}-test-results.json',
				template: '{}',
				abortOnFail: true,
			},
			{
				type: 'add',
				path:
					'../../src/components/{{properCase name}}/{{properCase name}}.stories.js',
				templateFile: './component/componentStories.js.hbs',
				abortOnFail: true,
			},
			{
				type: 'add',
				path: '../../src/components/{{properCase name}}/index.d.ts',
				templateFile: './component/component.d.ts.hbs',
				abortOnFail: true,
			},
		];

		if (data.wantStyledComponents) {
			actions.push({
				type: 'add',
				path:
					'../../src/components/{{properCase name}}/Styled{{properCase name}}.js',
				templateFile: './component/componentStyled.js.hbs',
				abortOnFail: true,
			});
		}

		// Add container export to index.js in container root folder
		actions.push({
			type: 'modify',
			path: '../../src/components/index.js',
			pattern: /(\/\* GENERATOR: Assemble all components for export \*\/)/g,
			templateFile: './component/componentExport.js.hbs',
		});

		return actions;
	},
};
