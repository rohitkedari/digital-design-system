import React from 'react';
import renderer from 'react-test-renderer';
import { ContextWrapper } from 'components/ContextWrapper';
import { Paragraph } from '../Paragraph';

test('Paragraph default renders correctly', () => {
	const tree = renderer
		.create(
			<ContextWrapper>
				<Paragraph>Test Paragraph</Paragraph>
			</ContextWrapper>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
