const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    mode: 'development',
    resolve:{
        extensions:['.js', '.jsx']
    },
    //webpack vai observar as alterações do código, para que cada alteração, seja criado o bundle
    //essa config precisa receber o local que fica o arquivo html estatico 
    devServer:{
        static: path.resolve(__dirname, 'public'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        })
    ],
    module: {
        rules:[
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use:'babel-loader'
            }
        ],
    }

}