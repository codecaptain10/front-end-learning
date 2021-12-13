const {
    resolve
} = require('path');

const config = {};

config.entry = {
    app: './src/app.js'
};

config.output = {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist')
};

module.exports = config;