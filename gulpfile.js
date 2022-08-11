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

// uswds.paths.src.sass = './_scss';
// uswds.paths.src.theme = '_scss';
uswds.paths.src.projectSass = "./_scss";

uswds.paths.dist.css = "./assets/uswds/css";
uswds.paths.dist.img = "./assets/uswds/img";
uswds.paths.dist.theme = "./_scss"; // looks to compile theme from here

exports.updateUswds = uswds.updateUswds;
exports.compileSass = uswds.compileSass;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
