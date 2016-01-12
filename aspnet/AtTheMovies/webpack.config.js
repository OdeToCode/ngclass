module.exports = {
	
	entry: "./wwwroot/app/boot",
	output: {
		path: "./wwwroot/bundle",		
		filename: "app.js"
	},
	
	resolve: {
		extensions: ["", ".js", ".ts"]
	},
	module: {
		loaders: [
			{
				test: /\.ts$/, loader: "ts", exclude: [/node_modules/]	
			}	
		]
	}
	
}