/**
 * context wrapper component
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, ResponsiveContextProvider } from 'contexts';
import { deepMerge, GlobalStyle, loadFonts } from 'utils';
import { baseTheme } from 'themes/base';

const ContextWrapper = ({ children, theme }) => {
    const nextTheme = deepMerge(baseTheme, theme);
    loadFonts(nextTheme.global.font.url);
    return (
        <ThemeContext.Provider value={nextTheme}>
            <ResponsiveContextProvider
                breakpoints={nextTheme.global.breakpoints}
            >
                <GlobalStyle />
                {children}
            </ResponsiveContextProvider>
        </ThemeContext.Provider>
    );
};
ContextWrapper.defaultProps = {
    theme: null,
};
ContextWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.shape({}),
};
export { ContextWrapper };
