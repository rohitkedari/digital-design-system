import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import { ResponsiveContext, ResponsiveContextProvider } from 'contexts';

storiesOf('components|ResponsiveContext', module)
	.addParameters({ component: ResponsiveContext })
	.add('Default Breakpoints', () => {
		const Wrapper = () => {
			const { viewport } = useContext(ResponsiveContext);
			return <div>{`This is a ${viewport} screen`}</div>;
		};
		return <Wrapper />;
	})
	.add('Custom Breakpoints', () => {
		const Wrapper = () => {
			const { viewport } = useContext(ResponsiveContext);
			return <div>{`This is a ${viewport} screen`}</div>;
		};
		return (
			<ResponsiveContextProvider
				breakpoints={{
					xsmall: {
						value: 200,
					},
					small: {
						value: 340,
					},
					medium: {
						value: 640,
					},
					large: {
						value: 1024,
					},
				}}
			>
				<Wrapper />
			</ResponsiveContextProvider>
		);
	});
