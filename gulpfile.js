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

exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
