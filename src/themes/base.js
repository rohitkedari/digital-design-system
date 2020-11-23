import colors from './colors';

const breakpoints = {
	xsmall: {
		value: 340,
	},
	small: {
		value: 640,
	},
	medium: {
		value: 1024,
	},
	large: {
		value: 3000,
	},
};
const weight = {
	regular: '400',
	bold: '700',
	extrabold: '800',
};

export const generate = (baseSpacing = 16, scale = 4) => {
	const baseFontSize = baseSpacing; // 16
	const fontScale = baseSpacing / scale; // 4
	const getFontSize = (factor) => ({
		size: `${baseFontSize + factor * fontScale}px`,
		lineHeight: `${baseSpacing + factor * fontScale}px`,
	});
	const tokens = {
		global: {
			font: {
				/* url:
					'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900&display=swap', */
				family: `"Nunito Sans",
					-apple-system,
					BlinkMacSystemFont, 
					"Segoe UI", 
					Roboto, 
					Oxygen, 
					Ubuntu, 
					Cantarell, 
					"Fira Sans", 
					"Droid Sans",  
					"Helvetica Neue", 
					Arial, sans-serif,  
					"Apple Color Emoji", 
					"Segoe UI Emoji", 
					"Segoe UI Symbol"`,
				...getFontSize(0),
				color: colors.text_primary,
				weight,
			},
			colors,
			breakpoints,
			spaceSize: {
				none: '0px',
				hair: '1px',
				xxsmall: '2px',
				xsmall: `${baseSpacing / 4}px`, // 4
				small: `${baseSpacing / 2}px`, // 8
				medium: `${baseSpacing}px`, // 16
				large: `${baseSpacing * 2}px`, // 32
				xlarge: `${baseSpacing * 3}px`, // 48
			},
			inputControl: {
				border: {
					width: '1px',
					radius: '4px',
					style: 'solid',
					color: 'border'
				}
			}
		},
		text: {
			font: {
				// family: undefined
				// weight: undefined
			},
			xsmall: { ...getFontSize(-1) }, // 12
			small: { ...getFontSize(-0.5) }, // 14
			medium: { ...getFontSize(0) }, // 16
			large: { ...getFontSize(1) }, // 20
			xlarge: { ...getFontSize(2) }, // 24
			xxlarge: { ...getFontSize(4) }, // 32
		},
		heading: {
			font: {
				// family: undefined
			},
			level: {
				1: {
					font: {
						// family: undefined
						// weight: undefined
					},
					small: { ...getFontSize(4) }, // 32
					medium: { ...getFontSize(8) }, // 48
					large: { ...getFontSize(16) }, // 80
					xlarge: { ...getFontSize(24) }, // 112
				},
				2: {
					font: {
						// family: undefined
						// weight: undefined
					},
					small: { ...getFontSize(2) }, // 24
					medium: { ...getFontSize(4) }, // 32
					large: { ...getFontSize(8) }, // 48
					xlarge: { ...getFontSize(12) }, // 64
				},
				3: {
					font: {
						// family: undefined
						// weight: undefined
					},
					small: { ...getFontSize(1) }, // 20
					medium: { ...getFontSize(2) }, // 24
					large: { ...getFontSize(4) }, // 32
					xlarge: { ...getFontSize(6) }, // 40
				},
				4: {
					font: {
						// family: undefined
						// weight: undefined
					},
					small: { ...getFontSize(0) }, // 16
					medium: { ...getFontSize(0) }, // 16
					large: { ...getFontSize(0) }, // 16
					xlarge: { ...getFontSize(0) }, // 16
				},
				5: {
					font: {
						// family: undefined
						// weight: undefined
					},
					small: { ...getFontSize(-0.5) }, // 14
					medium: { ...getFontSize(-0.5) }, // 14
					large: { ...getFontSize(-0.5) }, // 14
					xlarge: { ...getFontSize(-0.5) }, // 14
				},
				6: {
					font: {
						// family: undefined
						// weight: undefined
					},
					small: { ...getFontSize(-1) }, // 12
					medium: { ...getFontSize(-1) }, // 12
					large: { ...getFontSize(-1) }, // 12
					xlarge: { ...getFontSize(-1) }, // 12
				},
			},
			responsiveBreakpoint: 'small', // when we scale the font size down
			weight: weight.bold,
		},
	};
	return tokens;
};

export const baseTheme = generate();
