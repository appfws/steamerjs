"use strict";

const fs = require('fs-extra'),
	  pluginUtils = require('steamer-pluginutils');

var utils = new pluginUtils();

const pluginPrefix = "steamer-plugin-";

function ListPlugin(argv) {
	this.argv = argv;
}

ListPlugin.prototype.init = function() {

	let files = this.filterCmds();

	utils.info("You have following commands: ");

	files.map((item) => {
		console.log(item.replace(pluginPrefix, ""));
	});
};

ListPlugin.prototype.filterCmds = function() {
	let files = fs.readdirSync(utils.globalNodeModules);

	files = files.filter((item) => {
		return item.indexOf(pluginPrefix) === 0;
	});

	return files;
};

module.exports = ListPlugin;