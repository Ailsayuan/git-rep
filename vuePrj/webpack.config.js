let webpack = require('webpack');

module.exports = {
	mode:"development",
	//入口文件（要打包的文件）
	entry:{
		"useperson":"./useperson.js"
	},

	//出口文件（打包的结果）
	output:{
		"path":__dirname+"/build/",
		"filename":"[name].bundle.js"
	}
}
