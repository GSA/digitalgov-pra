var autoprefixer = require("autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
var cssnano = require("cssnano");
var gulp = require("gulp");
var mqpacker = require("css-mqpacker");
var path = require("path");
var pkg = require("./node_modules/@uswds/uswds/package.json");
var sass = require("gulp-sass")(require("sass"));

var watchify = require("watchify");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var log = require("gulplog");
var assign = require("lodash.assign");

// compile
var uswds = require("@uswds/compile");
uswds.settings.version = 3;
uswds.paths.dist.theme = './_scss';
uswds.paths.dist.css = "./_site/assets/uswds/css";


// Project Javascript source directory
const PROJECT_JS_SRC = "./_js";

// Javascript destination
const PROJECT_JS_DEST = "./_site/assets/js";

// Project Sass source directory
const PROJECT_SASS_SRC = "./_scss";

// Images destination
const IMG_DEST = "./_site/assets/uswds/img";

// Fonts destination
const FONTS_DEST = "./_site/assets/uswds/fonts";

// Javascript destination
const JS_DEST = "./_site/assets/uswds/js";

// Compiled CSS destination
const CSS_DEST = "./_site/assets/uswds/css";

/*
----------------------------------------
TASKS
----------------------------------------
*/

gulp.task("copy-uswds-fonts", () => {
  return gulp.src(`${uswds}/dist/fonts/**/**`).pipe(gulp.dest(`${FONTS_DEST}`));
});

gulp.task("copy-uswds-images", () => {
  return gulp.src(`${uswds}/dist/img/**/**`).pipe(gulp.dest(`${IMG_DEST}`));
});

gulp.task("copy-uswds-js", () => {
  return gulp.src(`${uswds}/dist/js/**/**`).pipe(gulp.dest(`${JS_DEST}`));
});

gulp.task("build-sass", function(done) {
  var plugins = [
    autoprefixer({
      cascade: false,
      grid: true
    }),
    mqpacker({ sort: true }),
  ];
  return gulp
    .src(`${PROJECT_SASS_SRC}/styles.scss`)
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: [
          PROJECT_SASS_SRC,
          `${uswds}`,
          `${uswds}/packages`
        ]
      })
    )
    .pipe(replace(/\buswds @version\b/g, "based on uswds v" + pkg.version))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(CSS_DEST));
});

var customOpts = {
  entries: [`${PROJECT_JS_SRC}/index.js`],
  detectGlobals: true
};
var opts = assign({}, watchify.args, customOpts);
var b = function() {
  return browserify(opts);
};
var w = watchify(b());

var bundle = function(pkg) {
  return pkg
    .bundle()
    .on("error", log.error.bind(log, "Browserify Error"))
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(PROJECT_JS_DEST));
};

gulp.task("build-js", bundle.bind(null, b()));

// gulp.task(
//   "init",
//   gulp.series(
//     "copy-uswds-fonts",
//     "copy-uswds-images",
//     "copy-uswds-js",
//     "build-sass"
//   )
// );

// gulp.task("watch-js", function() {
//   bundle(w);
//   w.on("update", bundle.bind(null, w));
//   w.on("log", log.info);
// });

exports.init = uswds.init;
exports.compile = uswds.compile;

gulp.task("watch-sass", function() {
  gulp.watch(`${PROJECT_SASS_SRC}/**/*.scss`, gulp.series("build-sass"));
});
