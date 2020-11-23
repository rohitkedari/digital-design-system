const recursiveInquirer = require('./utils/inquirer-recursive');
const componentGenerator = require('./component');
const containerGenerator = require('./container');

module.exports = (plop) => {
	plop.setPrompt('recursive', recursiveInquirer);
	plop.setGenerator('component', componentGenerator);
	plop.setGenerator('container', containerGenerator);
};
