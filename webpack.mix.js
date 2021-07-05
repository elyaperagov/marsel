const mix = require('laravel-mix');
require('laravel-mix-compress-images');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .js('src/js/app.js', 'assets/js/')
  .sass('src/sass/app.scss', 'assets/css/')
  .setPublicPath('assets')
  .extract(['jquery', 'vue'])
  .sourceMaps(true, 'source-map')
  // .babel(['assets/js/manifest.js'], 'assets/js/manifest.js')
  // .babel(['assets/js/vendor.js'], 'assets/js/vendor.js')
  // .babel(['assets/js/app.js'], 'assets/js/app.js')
  // .browserSync('az-html-mix/assets')
  .copyDirectory('src/fonts', 'assets/fonts')
  .copy('src/img/*.svg', 'assets/img')
  .options({
    extractVueStyles: false,
    processCssUrls: false,
    purifyCss: false,
    terser: {},
    postCss: [
      require('autoprefixer')
    ],
  })

  .webpackConfig({
    module: {
      rules: [

      ]
    }
  });
