const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');

// 根据传入的路径设置对应的入口
function getEntries(globPath) {
     var files = glob.sync(globPath),
       entries = {};

     files.forEach(function(filepath) {
        var split = filepath.split('/');
        var name = split[split.length - 2];
        //  忽略assets目录
        if(name != 'js') {
            entries[name] = './' + filepath;
        }
     });

     return entries;
}
 
var entries = getEntries('src/**/**.js');

// 动态生成HtmlWebpackPlugin
var htmlPlugins = [];
Object.keys(entries).forEach(function(name) {
    var plugin = new HtmlWebpackPlugin({
        // 打包后的html文件 - /dist/index.html
        filename: __dirname + '/dist/' + name + '.html',
        // 需要打包的html文件 - /src/index/index.html
        template: __dirname + '/src/' + name + '/' + name + '.html',
        // 自动将“引用”插入html
        inject: true,
        // 每个html引用的js模块
        chunks: [name]
    });
    htmlPlugins.push(plugin);
})

// 额外的共有入口
entries.common = './src/assets/js/common.js';

module.exports = {
    entry: entries,
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        ...htmlPlugins,
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            filename:'css/[name].css',
            chunkFilename: 'css/[id].css'
        })
    ],
    module: {
        rules: [
            // .htm | .html 文件处理
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            // .css 文件处理
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            // .less 文件处理
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            },
            // .jpg | .jpeg | .png | .gif |.svg 文件处理
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 200 * 1024,
                    name: 'images/[name].[ext]',
                    path: path.resolve(__dirname, 'images')
                }
            },
            // .woff | .woff2 | .eot | .ttf | .otf 文件处理
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'url-loader',
                options: {
                    limit: 100 * 1024,
                    name: 'fonts/[name].[ext]'
                }
            },
            // .art-template引擎模板
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            }
        ]
    }
};