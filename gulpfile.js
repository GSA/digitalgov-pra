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
uswds.paths.dist.theme = './_scss';
uswds.paths.dist.css = "./_site/assets/uswds/css";
uswds.paths.dist.img = "./assets/uswds/img"


exports.init = uswds.init;
exports.copyFonts = uswds.copyFonts;
exports.copyImages = uswds.copyImages;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
