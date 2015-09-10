var compileSass = require('broccoli-sass');
var scssDir = 'app/scss';
var styles = compileSass([scssDir], 'app.scss', 'app.css');

