var webpack = require("webpack");
var fs = require("fs");
const path = require('path');
const libraryName = 'routemamba'
const outputFile = `${libraryName}.min.js` 
module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, 'src/routemamba.ts'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: outputFile, 
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    resolve: {
      extensions: ['', '.ts', '.tsx', '.js'] 
    },
    module: {
      rules: [
        { test: /\.ts?$/, loader: "ts-loader" }
      ]
    },
    plugins: [
      new webpack.BannerPlugin(fs.readFileSync('./LICENSE', 'utf8')),
    ],
    devServer: {
        static: {
          directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 3000,
        host: 'localhost'
      },
}