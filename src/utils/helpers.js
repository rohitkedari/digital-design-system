export const isObject = (item) =>
	item && typeof item === 'object' && !Array.isArray(item);

export const deepMerge = (target, ...sources) => {
	if (!sources.length) {
		return target;
	}
	// making sure to not change target (immutable)
	const output = { ...target };
	sources.forEach((source) => {
		if (isObject(source)) {
			Object.keys(source).forEach((key) => {
				if (isObject(source[key])) {
					if (!output[key]) {
						output[key] = { ...source[key] };
					} else {
						output[key] = deepMerge(output[key], source[key]);
					}
				} else {
					output[key] = source[key];
				}
			});
		}
	});
	return output;
};

export const getViewport = (windowWidth, breakpoints) => {
	let result;
	Object.keys(breakpoints)
		.sort((a, b) => {
			const first = breakpoints[a];
			const second = breakpoints[b];
			if (!first) return 1;
			if (!second) return -1;
			if (!first.value) return 1;
			if (!second.value) return -1;
			return first.value - second.value;
		})
		.some((name) => {
			const breakpoint = breakpoints[name];
			if (breakpoint) {
				if (!breakpoint.value || breakpoint.value >= windowWidth) {
					result = name;
					return true;
				}
			}
			return false;
		});
	return result;
};

export const getColor = (color, theme) => {
	const result =
		theme.global.colors[color] !== undefined
			? theme.global.colors[color]
			: color;
	return result;
};

const fontLinkId = 'storybook-font-link-tag';

export const loadFonts = (fontUrl) => {
	if (fontUrl && !document.getElementById(fontLinkId)) {
		const fontLink = document.createElement('link');

		fontLink.id = fontLinkId;
		fontLink.href = fontUrl;
		fontLink.rel = 'stylesheet';

		document.head.appendChild(fontLink);
	}
};
