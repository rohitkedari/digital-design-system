import { createGlobalStyle, css } from 'styled-components';
import { getColor } from './helpers';

export const bodyStyles = css`
	font-family: ${(props) => props.theme.global.font.family};
	font-size: ${(props) => props.theme.global.font.size};
	line-height: ${(props) => props.theme.global.font.height};
	color: ${(props) => props.theme.global.font.color};

	margin: 0;
	overflow-y: auto;
	overflow-x: hidden;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
	-webkit-overflow-scrolling: touch;

	* {
		box-sizing: border-box;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: ${(props) => props.theme.global.font.weight};
		margin: 0;
		padding: 0;
	}

	button,
	input,
	textarea,
	select {
		outline: none;
		font-family: ${(props) => props.theme.global.font.family};
	}
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;

export const inputControlBorderStyle = css`
	border: ${(props) => props.theme.global.inputControl.border.width}
		${(props) => props.theme.global.inputControl.border.style}
		${(props) =>
			getColor(
				props.theme.global.inputControl.border.color,
				props.theme,
			)};
	border-radius: ${(props) => props.theme.global.inputControl.border.radius};
`;
