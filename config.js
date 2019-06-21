const mix = require('laravel-mix');
const del = require('del');
const chalk = require('chalk');

mix.extend('remove', function (webpackConfig, ...args) {
    del.sync(...args)
    // console.log(chalk`{red Deleted files and folders:} `)
});

mix
    .options({
        clearConsole: false,
    })
;


// http://www.compulsivecoders.com/tech/how-to-build-multiple-vendors-using-laravel-mix/