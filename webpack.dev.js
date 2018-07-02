const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // 设置host为WiFi的IPV4地址，可以多类型设备访问
        // host: '192.168.1.107' 
    }
});