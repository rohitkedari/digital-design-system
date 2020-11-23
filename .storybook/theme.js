import { create } from '@storybook/theming';
import logo from './static/logo.svg';

// https://storybook.js.org/docs/configurations/theming/

export default create({
	base: 'light',
	colorSecondary: '#005F7A',
	appBg: '#F8F8F8',
	appBorderColor: '#EDEDED',
	appBorderRadius: 6,
	barTextColor: '#999999',
	barSelectedColor: '#005F7A',
	barBg: '#F2F2F2',
	inputBg: 'white',
	inputBorder: 'rgba(0,0,0,.1)',
	inputTextColor: '#333333',
	inputBorderRadius: 4,
	brandImage: logo,
	brandUrl: '#',
});
