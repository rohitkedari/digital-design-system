import React from 'react';
import renderer from 'react-test-renderer';
import { ContextWrapper } from 'components/ContextWrapper';
import { faPhone, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';

describe('Icon', () => {
	beforeAll(() =>
		jest.spyOn(global.Math, 'random').mockImplementation(() => 0),
	);
	afterAll(() => jest.restoreAllMocks());
	test('default renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Icon icon={faPhone} title="phone icon" />
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('with size renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Icon icon={faPhone} title="phone icon" size="xs" />
					<Icon icon={faPhone} title="phone icon" size="sm" />
					<Icon icon={faPhone} title="phone icon" size="lg" />
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('with spin renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Icon icon={faSpinner} title="loading" spin />
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('with color renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Icon icon={faPhone} title="red phone icon" color="red" />
					<Icon
						icon={faPhone}
						title="brand phone icon"
						color="brand"
					/>
					<Icon
						icon={faPhone}
						title="green phone icon"
						color="#66BF3C"
					/>
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('with border renders correctly', () => {
		const tree = renderer
			.create(
				<ContextWrapper>
					<Icon
						icon={faPhone}
						title="phone with border"
						border
						size="4x"
					/>
				</ContextWrapper>,
			)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
