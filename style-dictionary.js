const StyleDictionaryPackage = require('style-dictionary');
const CUSTOM_SIZE_TRANSFORM = 'size/transform';
const TRANSFORMS = ["attribute/cti", "name/cti/kebab", CUSTOM_SIZE_TRANSFORM];
const CUSTOM_FORMAT = 'css/custom';
const THEMES = ['dark'];

const build = (config) => {
	buildDictionary(getGlobalConfig(config), {
		wrapper: ':root'
	});

	const themes = config.themes ? config.themes : [];
	themes.forEach((theme) => {
		buildDictionary(getThemeConfig(theme, config), {
			wrapper: `body.theme-${theme}`
		});
	});
};

function buildDictionary(config, {wrapper}) {
	const StyleDictionary = StyleDictionaryPackage.extend(config);
	const {
		fileHeader,
		formattedVariables
	} = StyleDictionary.formatHelpers;

	StyleDictionary.registerTransform({
		name: CUSTOM_SIZE_TRANSFORM,
		type: 'value',
		matcher: (token) => ['spacing'].includes(token.attributes.category) || ['size'].includes(token.attributes.type),
		transformer: function(token) {
		  return token.value + 'rem';
		}
	});

	StyleDictionary.registerFormat({
		name: CUSTOM_FORMAT,
		formatter: function ({
			dictionary,
			file,
			options
		}) {
			const {
				outputReferences
			} = options;
			dictionary.allTokens = dictionary.allTokens.reduce((accu, token) => {
				if (token.attributes.ignore) {
					return accu;
				}

				if (isHSLColorToken(token)) {
					return accu.concat(getColorTokens(token));
				}

				accu.push(token);
				return accu;
			}, []);
			
			return fileHeader({
					file
				}) +
				`@mixin theme {\n` +
				formattedVariables({
					format: 'css',
					dictionary,
					outputReferences
				}) +
				`\n}\n\n${wrapper} { @include theme }`;
		}
	});
	StyleDictionary.buildAllPlatforms();
}


function getGlobalConfig({source, buildPath}) {
	return {
		source,
		platforms: {
			scss: {
				transforms: TRANSFORMS,
				buildPath,
				files: [{
					destination: '_tokens.scss',
					format: CUSTOM_FORMAT 
				}]
			}
		}
	}
}

function getThemeConfig(theme, {themeSource, buildPath}) {
	return {
		source: themeSource.map(source => source.replace(':theme', theme)),
		platforms: {
			scss: {
				transforms: TRANSFORMS,
				buildPath,
				files: [{
					destination: `_tokens.${theme}.scss`,
					format:CUSTOM_FORMAT 
				}]
			}
		}
	}
}


function isHSLColorToken(token) {
	return token.attributes.category === 'color' && typeof token.value === 'string' && token.value.startsWith('hsl(');
}

function getColorTokens(token) {
	const res = [];
	const colors = token.value.replace('hsl(', '').replace(')', '').split(',');
	const parts = ['h', 's', 'l'];
	colors.map((v, i) => {
		res.push({
			...token,
			value: v,
			name: `${token.name}-${parts[i]}`,
		});
	});

	res.push({
		...token,
		value: `hsl(var(--${token.name}-h), var(--${token.name}-s), var(--${token.name}-l))`
	});

	if (token.tint) {
		Object.keys(token.tint).forEach((i) => {
			res.push({
				...token,
				name: `${token.name}-tint-${i}-l`,
				value: `${token.tint[i]}%`
			});

			res.push({
				...token,
				name: `${token.name}-tint-${i}`,
				value: `hsl(var(--${token.name}-h), var(--${token.name}-s), var(--${token.name}-tint-${i}-l))`
			});
		});
	}

	if (token.shade) {
		Object.keys(token.shade).forEach((i) => {
			res.push({
				...token,
				name: `${token.name}-shade-${i}-l`,
				value: `${token.shade[i]}%`
			});

			res.push({
				...token,
				name: `${token.name}-shade-${i}`,
				value: `hsl(var(--${token.name}-h), var(--${token.name}-s), var(--${token.name}-shade-${i}-l))`
			});
		});
	}

	return res;
}

module.exports = {
	build
};
