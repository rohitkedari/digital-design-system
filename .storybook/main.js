const appConfig = require('../webpack.config.babel');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-a11y/register',
		'@storybook/addon-jest/register',
		'storybook-readme/register',
		'@storybook/addon-docs',
	],
	webpackFinal: async (config, { mode }) => {
		return {
			...config,
			resolve: appConfig.resolve,
		};
	},
};
