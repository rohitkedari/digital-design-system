import styled, { css } from 'styled-components';
import { getColor } from 'utils';

const sizeStyle = (props) => {
	// size is a combination of the level and size properties
	const size = props.size || 'medium';
	const headingTheme = props.theme.heading;
	const levelStyle = headingTheme.level[props.level];
	if (levelStyle) {
		const data = levelStyle[size];
		const styles = [
			css`
				font-size: ${data ? data.size : size};
				line-height: ${data ? data.height : 'normal'};
				max-width: ${data ? data.maxWidth : levelStyle.medium.maxWidth};
				font-weight: ${levelStyle.font.weight || headingTheme.weight};
			`,
		];
		return styles;
	}
	return '';
};

const fontFamily = (props) => {
	const { font } = props.theme.heading.level[props.level];
	if (font && font.family) {
		return css`
			font-family: ${font.family};
		`;
	}
	return props.theme.heading.font
		? css`
				font-family: ${props.theme.heading.font.family};
		  `
		: '';
};

const StyledHeading = styled.h4`
	${(props) => fontFamily(props)}
	${(props) => sizeStyle(props)}
	text-align: ${(props) => props.textAlign};
	color: ${(props) => getColor(props.colorProp, props.theme)};
`;

export { StyledHeading };
