const mix = require('laravel-mix');
require('./config')

mix
    .webpackConfig({
        // output: {
        //     library: "App",
        //     libraryTarget: 'umd'
        // },
        externals: {
            lodash: '_',
            handlebars: 'Handlebars',
        }
    })
    .setPublicPath('dist')
    .remove(['dist/**'])

mix
    .js('src/json/lib/lodash.json.js', 'dist/lodash.json.js')
    .js('src/template/lib/lodash.template.js', 'dist/lodash.template.js')
    .js('src/geo/lib/lodash.geo.js', 'dist/lodash.geo.js')
    .js('src/extra/lib/lodash.extra.js', 'dist/lodash.extra.js')
    .js('src/extra/lib/lodash.all.js', 'dist/lodash.all.js')
    .sourceMaps()

