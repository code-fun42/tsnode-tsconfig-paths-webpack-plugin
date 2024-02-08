import path from "node:path";

import {Configuration as WebpackConfig} from "webpack";
import TsnodeTsconfigPathsWebpackPlugin from "./plugins/tsnode-paths";

const config: WebpackConfig = {
	devtool: false,
	mode: "development",

	entry: "./src/index.ts",

	// cache: {
	// 	type: "filesystem",
	// },

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		clean: true,
	},

	resolve: {
		extensions: [".ts", ".js"],

		alias: {
			"@components": path.resolve(__dirname, "src", "components"),
		},

		modules: [path.resolve(__dirname, 'node_modules')],

		plugins:[
			new TsnodeTsconfigPathsWebpackPlugin()
		],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/i,
				exclude: /node_modules/,
				loader: "ts-loader",
			}
		]
	}
};

export default config;
