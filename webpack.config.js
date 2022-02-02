const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`
const optimisation = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd){
        config.minimizer = [
                new OptimizeCssAssetsWebpackPlugin(),
                new TerserWebpackPlugin()

            ]
    }
    return config
}

module.exports ={
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './js/scripts0.js',
        slider: ['./js/slider.js', './js/slick.js'],
        analytics: './js/analytics.js',
    },
    output: {
        filename: `${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "./img/[name][ext]"
    },
    resolve: {
        alias: {
            "@img": path.resolve(__dirname, 'src/img'),
            "@css": path.resolve(__dirname, 'src/css')
        }
    },
    optimization: optimisation(),
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',

        }),
        new HTMLWebpackPlugin({
            filename: 'contacts.html',
            template: './contacts.html',
        }),
        new HTMLWebpackPlugin({
            filename: 'projects.html',
            template: './projects.html',
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, 'src/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(?:|jpeg|jpg|png|gif|svg)$/,
                type: 'asset/resource',
            }
        ]
    }
}