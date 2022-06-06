const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js' , 'mjs']
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            use: {
              loader: "babel-loader"
            },
            exclude: /node_modules/
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin({ //* Configuracion del plugin
            inject: true, //* Inyecta el buldle al templeate HTML
            template: './public/index.html', 
            filename: './index.html' 
        })
    ]
}
