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
    .js('json/lib/lodash.json.js', 'dist/lodash.json.js')
    .js('template/lib/lodash.template.js', 'dist/lodash.template.js')
    .js('geo/lib/lodash.geo.js', 'dist/lodash.geo.js')
    .js('extra/lib/lodash.extra.js', 'dist/lodash.extra.js')
    .js('extra/lib/lodash.all.js', 'dist/lodash.all.js')
    .sourceMaps()

