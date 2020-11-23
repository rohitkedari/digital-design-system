import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { faPhone, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Icon } from './Icon';
import results from './__tests__/Icon-test-results.json';

storiesOf('components|Icon', module)
	.addDecorator(
		withTests({
			results,
		}),
	)
	.addParameters({ component: Icon, jest: ['Icon.test.js'] })
	.add('Default', () => <Icon icon={faPhone} title="coffee" />)
	.add('With Size', () => (
		<>
			<Icon icon={faPhone} title="coffee" size="xs" />
			<Icon icon={faPhone} title="coffee" size="sm" />
			<Icon icon={faPhone} title="coffee" size="lg" />
		</>
	))
	.add('With Spin', () => <Icon icon={faSpinner} title="loading" spin />)
	.add('With Color', () => (
		<>
			<Icon icon={faPhone} title="loading" color="red" />
			<Icon icon={faPhone} title="loading" color="brand" />
			<Icon icon={faPhone} title="loading" color="#66BF3C" />
		</>
	))
	.add('With Border', () => (
		<Icon icon={faPhone} title="loading" border size="4x" />
	));
