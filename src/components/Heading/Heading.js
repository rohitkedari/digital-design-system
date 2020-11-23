import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeading } from './StyledHeading';

const Heading = ({ level, size, color, textAlign, ...rest }) => {
	return (
		<StyledHeading
			as={`h${level}`}
			size={size}
			colorProp={color}
			level={+level}
			textAlign={textAlign}
			{...rest}
		/>
	);
};

Heading.defaultProps = {
	size: 'medium',
	level: 4,
	color: null,
	textAlign: null,
};

Heading.propTypes = {
	size: PropTypes.oneOf([
		'small',
		'medium',
		'large',
		'xlarge',
		PropTypes.string,
	]),
	level: PropTypes.number,
	color: PropTypes.string,
	textAlign: PropTypes.oneOf(['center', 'right', 'left']),
};

export { Heading };
