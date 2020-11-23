import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({props}) => {
	return <div {...props}>Component view</div>;
};

Modal.defaultProps = {
	isOpen: false,
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
};

export { Modal };
