import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { ThemeContext, ResponsiveContext } from 'contexts';
import { withA11y } from '@storybook/addon-a11y';
import { ContextWrapper } from './ContextWrapper';

const StyledContent = styled('div')`
	color: ${(props) => props.color || props.theme.global.colors.brand};
`;
storiesOf('components|ContextWrapper', module)
	.addParameters({ component: ContextWrapper })
	.addDecorator(withA11y)
	.add('Default Context', () => {
		const Content = () => {
			const { viewport } = useContext(ResponsiveContext);
			const theme = useContext(ThemeContext);
			return (
				<div>
					{`This is a ${viewport} screen`}
					<StyledContent>Text with brand color</StyledContent>
					<StyledContent color={theme.global.colors.status_ok}>
						Text with success color
					</StyledContent>
					<StyledContent color={theme.global.colors.status_error}>
						Text with error color
					</StyledContent>
					<StyledContent color={theme.global.colors.status_warning}>
						Text with warning color
					</StyledContent>
				</div>
			);
		};
		return (
			<ContextWrapper>
				<Content />
			</ContextWrapper>
		);
	});
