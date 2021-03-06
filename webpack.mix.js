const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'js')
   .sass('resources/sass/app.scss', 'css')
   .copyDirectory('resources/js/libraries', 'js/libraries')
   .options({
      processCssUrls: false,
   })
   .browserSync({
      proxy: '192.10.0.193',
      files: [
         'css/{*,**/*}.css',
         'js/{*,**/*}.js',
         '{*,**/*}.html',
      ],
   });