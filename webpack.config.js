const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development',
    entry : './src/app/index.js', 
    output : {
        filename : 'main.js', 
        path : path.resolve(__dirname, 'build')
    }, 
    plugins : [
        new HtmlWebpackPlugin({template : './src/index.html'})
    ]    
}