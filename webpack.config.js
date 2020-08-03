const path = require('path');

module.exports = {
	entry  : [
		'./js/index.js'
	],
	output : {
		path     : path.resolve(__dirname, 'dist'),
		filename : 'js/bundle.js'
	},
	module : {
		rules : [
			{
				test    : /\.js$/,
				exclude : /node_modules/,
				use     : {
					loader : 'babel-loader'
				}
			}
		]
	}
};
