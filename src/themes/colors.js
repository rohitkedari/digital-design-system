const brandColor = '#005F7A'; // #243a5e
const brandDimColor = '#004c62';
const statusColors = {
	critical: '#900000',
	error: '#900000',
	warning: '#FFAA15',
	ok: '#006700',
	unknown: '#CCCCCC',
	disabled: '#CCCCCC',
};
const textColors = {
	primary: '#444444',
	secondary: '#666666',
};
const backgroundColors = {
	black: '#000000',
	grey: '#F7F7F7',
	white: '#FFFFFF',
};

const colors = {
	brand: brandColor,
	brandDim: brandDimColor,
	border: '#444444',
};

const colorsMap = (colorList, prefix) =>
	Object.keys(colorList).forEach((color) => {
		colors[`${prefix}_${color}`] = colorList[color];
	});

colorsMap(statusColors, 'status');
colorsMap(textColors, 'text');
colorsMap(backgroundColors, 'bg');

export default colors;
