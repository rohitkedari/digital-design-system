const _ = require('lodash');
const inquirer = require('inquirer');

const Base = require('inquirer/lib/prompts/base');

class RecuresivePrompt extends Base {
	constructor(question, rl, answers) {
		super(question, rl, answers);

		this.opt = _.defaults(_.clone(question), {
			validate: () => true,
			filter: (val) => val,
			when: () => true,
		});
		if (!this.opt.prompts) {
			this.throwParamError('prompts');
		}
		this.responses = [];
	}

	// eslint-disable-next-line no-underscore-dangle
	_run(cb) {
		this.done = cb;
		this.askForLoop();
		return this;
	}

	askNestedQuestion() {
		inquirer.prompt(this.opt.prompts).then((result) => {
			this.responses.push(result);
			this.askForLoop();
		});
	}

	askForLoop() {
		inquirer
			.prompt({
				default: true,
				type: 'confirm',
				name: 'loop',
				message: this.opt.message || 'Would you like to loop ?',
			})
			.then((result) => {
				if (result.loop) {
					this.askNestedQuestion();
				} else {
					this.done(this.responses);
				}
			});
	}
}
module.exports = RecuresivePrompt;
