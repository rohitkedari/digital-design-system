const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const plugins = [new CleanWebpackPlugin()];
module.exports = {
	devtool: 'source-map',
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	output: {
		path: path.resolve('./dist'),
		filename: 'digital-design-system.min.js',
		libraryTarget: 'var',
		library: 'digitalDesignSystem',
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'styled-components': 'styled',
	},
	plugins,
	// Set alias for different paths
	resolve: {
		alias: {
			components: path.resolve(ROOT_PATH, 'src/components'),
			themes: path.resolve(ROOT_PATH, 'src/themes'),
			utils: path.resolve(ROOT_PATH, 'src/utils'),
			contexts: path.resolve(ROOT_PATH, 'src/contexts'),
			tests: path.resolve(ROOT_PATH, 'tests'),
		},
		extensions: ['.js', '.jsx', '.mdx'],
	},
};
