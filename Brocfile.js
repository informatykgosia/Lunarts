var compileSass = require('broccoli-sass');
var scssDir = 'app/scss';
var styles = compileSass([scssDir], 'application.scss', 'application.css');
module.exports = styles;