import React from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './StyledSelect';
import { StyledOption } from './StyledOption';

const Select = ({ options, defaultValue, onChange, disabled, ariaLabel, title }) => {
	return (
		<div>
			<StyledSelect
				defaultValue={defaultValue}
				onChange={onChange}
				disabled={disabled}
				aria-label={ariaLabel}
				title={title}
			>
				{
					options && options.length != 0 ? options.map(option => (
						<StyledOption
							key={option.key}
							value={option.key}
						>
							{option.value}</StyledOption>
					)) : (
							<StyledOption >select</StyledOption>
						)
				}
			</StyledSelect>
		</div >
	);
};

Select.defaultProps = {
	ariaLabel: "select",
	title: "select"
}

Select.propTypes = {
	options: PropTypes.array,
	defaultValue: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	ariaLabel: PropTypes.string,
	title: PropTypes.string
};

export { Select };