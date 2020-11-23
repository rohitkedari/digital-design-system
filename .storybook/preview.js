import React from 'react';
import { addParameters, configure, addDecorator } from '@storybook/react';
import customTheme from './theme';
import { ContextWrapper } from 'components';
import { withA11y } from '@storybook/addon-a11y';

addParameters({
	options: {
		theme: customTheme,
		showNav: true,
		showPanel: true, // show the code panel by default
	},
});
const ThemeDecorator = (storyFn) => (
	<ContextWrapper>{storyFn()}</ContextWrapper>
);

addDecorator(withA11y);
addDecorator(ThemeDecorator);

configure(require.context('../src/components', true, /\.stories\.js$/), module);
