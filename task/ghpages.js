const { src, dest} = require('gulp');

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const ghPages = require("gulp-gh-pages");

//Обработка Javascript
const ghpages = () =>{
    return src("./public/**/*")
    .pipe(ghPages());
    
}

module.exports = ghpages;