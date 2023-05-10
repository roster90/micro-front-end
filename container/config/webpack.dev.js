const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')

const commonConfig = require('./webpack.common');

const devConfig  ={
    mode: 'development',
    devServer:{
        port: 5050,
        historyApiFallback:{
            index: 'index.html'
        }

    },
    plugins:[
        new ModuleFederationPlugin({
            name: 'container',
            remotes:{
                marketing:'marketing@http://localhost:5051/remoteEntry.js'
            },
            // shared: packageJson.dependencies
            // shared:['react','react-dom']
            
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)
