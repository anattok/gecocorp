const { src, dest} = require('gulp');

//Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

//Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const concat= require("gulp-concat");
const uglify = require("gulp-uglify");
//Обработка Javascript
const js = () =>{
    return src( path.js.src,{ sourcemaps: true }
        )
    .pipe(plumber({
        errorHandler: notify.onError(error =>({
            title: "Проверь js",
            message: error.message
        }))
    }))
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: true }));
}

module.exports = js;