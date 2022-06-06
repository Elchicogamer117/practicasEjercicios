const path = require('path');

module.exports = {
    entry: './src/index.js', //*Punto de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //*Salida configurada de forma global
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js']
    }
}