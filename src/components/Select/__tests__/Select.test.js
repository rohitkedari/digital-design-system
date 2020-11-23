import React from 'react';
import renderer from 'react-test-renderer';
import { ContextWrapper } from 'components/contextWrapper';
import { Select } from '..';

describe('Select', () => {
	test('Select default renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Select options={null}></Select>
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
