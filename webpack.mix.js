const mix = require('laravel-mix');

mix.ts("./src/main.ts", "./dist/scripts.js")
    .sass("./src/main.scss", "./dist/styles.css")
    .options({ processCssUrls: false , autoprefixer:true})
    .copy("./src/index.html", "./dist")
    .copy("./src/pages/assets","./dist/assets")
    .minify("./dist/scripts.js");