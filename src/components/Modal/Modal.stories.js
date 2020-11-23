import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { Modal } from '.';
import results from './__tests__/Modal-test-results.json';

storiesOf('components|Modal', module)
	.addDecorator(
		withTests({
			results,
		}),
	)
	.addParameters({ component: Modal, jest: ['Modal.test.js'] })
	.add('Default', () => (
		<div>
			<Modal />
		</div>
	));
