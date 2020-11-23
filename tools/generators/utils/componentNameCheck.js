const fs = require('fs');

const components = fs.readdirSync('src/components');

const componentNameCheck = (component) => components.indexOf(component) >= 0;

module.exports = componentNameCheck;
