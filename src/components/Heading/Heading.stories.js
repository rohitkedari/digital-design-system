import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { Heading } from './Heading';
import results from './__tests__/Heading-test-results.json';

storiesOf('components|Heading', module)
	.addDecorator(
		withTests({
			results,
		}),
	)
	.addParameters({ component: Heading, jest: ['Heading.test.js'] })
	.add('All Default Headings', () => (
		<div>
			<Heading>Default Heading</Heading>
			<Heading level={1}>Heading H1</Heading>
			<Heading level={2}>Heading H2</Heading>
			<Heading level={3}>Heading H3</Heading>
			<Heading level={4}>Heading H4</Heading>
			<Heading level={5}>Heading H5</Heading>
			<Heading level={6}>Heading H6</Heading>
		</div>
	))
	.add('Aligned Headings', () => (
		<div>
			<Heading textAlign="center" level={1}>
				Heading H1 center
			</Heading>
			<Heading textAlign="left" level={2}>
				Heading H2 left
			</Heading>
			<Heading textAlign="right" level={3}>
				Heading H3 right
			</Heading>
		</div>
	))
	.add('Colored Headings', () => (
		<div>
			<Heading color="brand" level={1}>
				Heading H1 brand
			</Heading>
			<Heading color="#95591E" level={2}>
				Heading H2 custom
			</Heading>
			<Heading color="status_ok" level={3}>
				Heading H3 success
			</Heading>
		</div>
	))
	.add('Small Headings', () => (
		<div>
			<Heading size="small">Small Heading</Heading>
			<Heading size="small" level={1}>
				Heading H1
			</Heading>
			<Heading size="small" level={2}>
				Heading H2
			</Heading>
			<Heading size="small" level={3}>
				Heading H3
			</Heading>
			<Heading size="small" level={4}>
				Heading H4
			</Heading>
			<Heading size="small" level={5}>
				Heading H5
			</Heading>
			<Heading size="small" level={6}>
				Heading H6
			</Heading>
		</div>
	))
	.add('Large Headings', () => (
		<div>
			<Heading size="large">Large Heading</Heading>
			<Heading size="large" level={1}>
				Heading H1
			</Heading>
			<Heading size="large" level={2}>
				Heading H2
			</Heading>
			<Heading size="large" level={3}>
				Heading H3
			</Heading>
			<Heading size="large" level={4}>
				Heading H4
			</Heading>
			<Heading size="large" level={5}>
				Heading H5
			</Heading>
			<Heading size="large" level={6}>
				Heading H6
			</Heading>
		</div>
	))
	.add('xLarge Headings', () => (
		<div>
			<Heading size="xlarge">Default Heading</Heading>
			<Heading size="xlarge" level={1}>
				Heading H1
			</Heading>
			<Heading size="xlarge" level={2}>
				Heading H2
			</Heading>
			<Heading size="xlarge" level={3}>
				Heading H3
			</Heading>
			<Heading size="xlarge" level={4}>
				Heading H4
			</Heading>
			<Heading size="xlarge" level={5}>
				Heading H5
			</Heading>
			<Heading size="xlarge" level={6}>
				Heading H6
			</Heading>
		</div>
	));
