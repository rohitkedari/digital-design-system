import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getColor } from 'utils';

const StyledIcon = styled(FontAwesomeIcon)`
	${(props) => props.color && `color: ${getColor(props.color, props.theme)};`}
`;
const Icon = ({ ...rest }) => {
	return <StyledIcon {...rest} />;
};

Icon.defaultProps = {
	border: false,
	mask: null,
	fixedWidth: false,
	inverse: false,
	flip: null,
	icon: null,
	listItem: false,
	pull: null,
	pulse: false,
	rotation: null,
	size: null,
	spin: false,
	swapOpacity: false,
	symbol: false,
	title: '',
	transform: null,
};

Icon.propTypes = {
	border: PropTypes.bool,
	fixedWidth: PropTypes.bool,
	flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),
	icon: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.string,
	]),
	inverse: PropTypes.bool,
	listItem: PropTypes.bool,
	mask: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.array,
		PropTypes.string,
	]),
	pull: PropTypes.oneOf(['right', 'left']),
	pulse: PropTypes.bool,
	rotation: PropTypes.oneOf([0, 90, 180, 270]),
	size: PropTypes.oneOf([
		'lg',
		'xs',
		'sm',
		'1x',
		'2x',
		'3x',
		'4x',
		'5x',
		'6x',
		'7x',
		'8x',
		'9x',
		'10x',
	]),
	spin: PropTypes.bool,
	swapOpacity: PropTypes.bool,
	symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	title: PropTypes.string,
	transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export { Icon };
