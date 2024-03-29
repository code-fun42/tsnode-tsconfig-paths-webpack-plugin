import path from "node:path";
import fs from "node:fs";

import {Resolver} from "webpack";
import {TsnodeTsconfigPathsWebpackPluginOptions} from "./interfaces";

export default class TsnodeTsconfigPathsWebpackPlugin {
	protected tsconfigPath: string;

	constructor(opts?: TsnodeTsconfigPathsWebpackPluginOptions) {
		this.tsconfigPath = opts?.pathToTsconfig ?? "tsconfig";
	}

	apply(resolver: Resolver) {
		resolver.hooks.resolve.tapAsync("TsnodeTsconfigPathsWebpackPlugin", (resolveRequest, resolveContext, callback) => {
			console.log("resolve");
			callback();
		});

		resolver.hooks.noResolve.tap("TsnodeTsconfigPathsWebpackPlugin", (resolveRequest, err) => {
			console.log("noResolve");
		});
	}
};
