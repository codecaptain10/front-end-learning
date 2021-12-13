const {
    resolve
} = require('path');
const {
    webpack
} = require('webpack');

module.exports = {
    entry: {
        app: '/src/app.js',
        libs: ['lodash']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            name: 'libs'
        }
    }


}