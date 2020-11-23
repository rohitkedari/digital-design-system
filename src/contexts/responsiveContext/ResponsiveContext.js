import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getViewport } from 'utils';
import { baseTheme } from 'themes/base';

export const ResponsiveContext = createContext({});

export const ResponsiveContextProvider = ({ children, breakpoints }) => {
	// This is the exact same logic that we previously had in our hook
	const [viewport, setViewport] = React.useState(
		getViewport(window.innerWidth, breakpoints),
	);

	const handleWindowResize = () => {
		setViewport(getViewport(window.innerWidth, breakpoints) || 'large');
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	/* Now we are dealing with a context instead of a Hook, so instead
     of returning the width and height we store the values in the
     value of the Provider */
	return (
		<ResponsiveContext.Provider value={{ viewport }}>
			{children}
		</ResponsiveContext.Provider>
	);
};

ResponsiveContextProvider.defaultProps = {
	breakpoints: baseTheme.global.breakpoints,
};

ResponsiveContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
	breakpoints: PropTypes.shape({}),
};
