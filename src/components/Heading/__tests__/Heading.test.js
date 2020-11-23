import React from 'react';
import renderer from 'react-test-renderer';
import { ContextWrapper } from 'components/ContextWrapper';
import { Heading } from '../Heading';

describe('Heading', () => {
	test('with default renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Heading>Test Heading</Heading>
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
