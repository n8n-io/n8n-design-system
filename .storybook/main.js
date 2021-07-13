const path = require('path');

module.exports = {
	"stories": [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)"
	],
	"addons": [
		"@storybook/addon-links",
		"@storybook/addon-essentials"
	],
	babel: async (options = {}) => ({
		...options,
		// any extra options you want to set
		// presets: ["@vue/cli-plugin-babel/preset"],
		plugins: [
			...options.plugins,
			[
				"component",
				{
				"libraryName": "element-ui",
				"styleLibraryName": "theme-chalk",
				}
			],
		]
	}),
	webpackFinal: async (config, {
		configType
	}) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.scss$/,
			oneOf: [{
					resourceQuery: /module/,
					use: [
						'vue-style-loader',
						{
							loader: 'css-loader',
							options: {
								modules: true
							}
						},
						'sass-loader',
					],
					include: path.resolve(__dirname, '../'),
				},
				{
					use: [
						'vue-style-loader',
						'css-loader',
						'sass-loader',
					],
					include: path.resolve(__dirname, '../'),
				}
			]
		});

		// Return the altered config
		return config;
	},
}