const mix = require('laravel-mix');

mix.ts("./src/main.ts", "./dist/scripts.js")
    .sass("./src/main.scss", "./dist/styles.css")
    .copy("./src/index.html", "./dist")
    .copy("./src/assets","./dist");