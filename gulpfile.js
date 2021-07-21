const gulp = require('gulp'); 
// const path = require('path');
const StyleDictionary = require('element-theme-n8n/style-dictionary');

function compileTokens(done) {
	StyleDictionary.build({
		source: ['./src/styles/tokens/**/*.json'], 
		buildPath: 'src/styles/'
	});
	done();
};

gulp.task('build:tokens', compileTokens);
