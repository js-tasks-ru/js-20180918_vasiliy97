const path = require('path');

module.exports = {
    /**
     * Здесь должен быть описан ваш конфиг для сборки.
     * Для ссылки на текущую папку используйте встроенную переменную __dirname
     */

    entry: path.resolve(__dirname, 'modules/app.js'),

    output: {
        path: path.resolve(__dirname),
        filename: 'index.js'
    }
};
