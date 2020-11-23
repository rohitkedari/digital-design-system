import React from 'react';
import renderer from 'react-test-renderer';
import { ContextWrapper } from 'components/contextWrapper';
import { Modal } from '..';

describe('Modal', () => {
	test('with default renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Modal />
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
