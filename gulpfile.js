"use strict";

const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const StyleDictionary = require("./style-dictionary");

gulp.task(
  "build:theme",
  gulp.series([compileThemeTokens, compileTheme, copyThemeFonts])
);

gulp.task("build:theme:tokens", compileThemeTokens);

gulp.task(
  "watch:theme",
  gulp.series([
    "build:theme",
    () => {
      gulp.watch(
        "./theme/src/tokens/**/*.json",
        gulp.series(["build:theme:tokens"])
      );
      gulp.watch("./theme/src/**/*.scss", gulp.series(["build:theme"]));
    },
  ])
);

function compileTheme() {
  return gulp
    .src("./theme/src/*.scss")
    .pipe(sass.sync())
    .pipe(
      autoprefixer({
        browsers: ["ie > 9", "last 2 versions"],
        cascade: false,
      })
    )
    .pipe(cleanCSS())
    .pipe(gulp.dest("./theme/dist"));
}

function compileThemeTokens(done) {
  StyleDictionary.build({
    source: ["theme/src/tokens/base/*.json", "theme/src/tokens/globals/*.json"],
    themeSource: [
      "theme/src/tokens/base/*.json",
      `theme/src/tokens/themes/:theme/*.json`,
    ],
    themes: ["dark"],
    buildPath: "theme/src/",
  });
  done();
}

function copyThemeFonts() {
  return gulp.src("./theme/src/fonts/**").pipe(gulp.dest("./theme/dist/fonts"));
}

// function compileTokens(done) {
// 	StyleDictionary.build({
// 		source: ['./src/styles/tokens/**/*.json'],
// 		buildPath: 'src/styles/'
// 	});
// 	done();
// };

// gulp.task('build:tokens', compileTokens);
