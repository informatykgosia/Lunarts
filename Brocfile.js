var compileSass = require('broccoli-sass');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var scssDir = 'app/scss';
var styles = compileSass([scssDir], 'application.scss', 'application.css');

var html = pickFiles('app/html', {  
  srcDir: '.',
  destDir: '.'
});

module.exports = mergeTrees([styles, html]);  