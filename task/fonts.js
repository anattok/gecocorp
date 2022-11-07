const { src, dest} = require('gulp');

//Конфигурация
const path = require("../config/path.js");


//Обработка fonts
const fonts = () =>{
    return src(path.fonts.src)
    
    .pipe(dest(path.fonts.dest));
}

module.exports = fonts;