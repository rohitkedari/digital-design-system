import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { Select } from '.';
import results from './__tests__/Select-test-results.json';

const defaultOptions = [
	{ 'key': '0', 'value': 'Delhi' },
	{ 'key': '1', 'value': 'Pune' },
	{ 'key': '2', 'value': 'Bangalore' },
	{ 'key': '3', 'value': 'Mumbai' },
	{ 'key': '4', 'value': 'Indore' },
];

const emptyOptions = null;

const defaultValue = defaultOptions[3].key;

const dropDownEventHandler = (event) => {
	console.log("selected option key:" + event.target.value);
}

storiesOf('components|Select', module)
	.addDecorator(
		withTests({
			results,
		}),
	)
	.addParameters({ component: Select, jest: ['Select.test.js'] })
	.add('default Select', () => (
		<div>
			<Select options={defaultOptions} onChange={dropDownEventHandler} ariaLabel="cities" title="cities"></Select>
		</div>
	))
	.add('empty Select', () => (
		<div>
			<Select options={emptyOptions}></Select>
		</div>
	))
	.add('default Select with default selection', () => (
		<div>
			<Select options={defaultOptions} defaultValue={defaultValue}></Select>
		</div>
	))
	.add('disabled select', () => (
		<div>
			<Select options={defaultOptions} disabled></Select>
		</div>
	));
