/*
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
* * * * * ==============================
========================================
========================================
========================================
----------------------------------------
USWDS SASS GULPFILE
----------------------------------------
*/

const uswds = require("@uswds/compile");
uswds.settings.version = 3;

uswds.paths.src.projectSass = "./_scss";

uswds.paths.dist.css = "./assets/uswds/css";
uswds.paths.dist.img = "./assets/uswds/img";
uswds.paths.dist.theme = "./_scss";

// updateUswds will copyAssets and compile, use copyAssets and compile for just those tasks
exports.updateUswds = uswds.updateUswds;
exports.copyAssets = uswds.copyAssets;
exports.compileSass = uswds.compileSass;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
