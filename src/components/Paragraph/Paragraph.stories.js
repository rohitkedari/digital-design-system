import React from 'react';
import { storiesOf } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { Paragraph } from './Paragraph';

storiesOf('components|Paragraph', module)
	.addParameters({ component: Paragraph, jest: ['Paragraph.test.js'] })
	.addDecorator(withA11y)
	.add('Default Paragraph', () => <Paragraph>Default paragraph</Paragraph>);
