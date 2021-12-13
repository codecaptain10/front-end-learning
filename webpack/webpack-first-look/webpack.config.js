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

//Add loader for css-files
config.module = {
    rules: [{
        test: /\.css$/,
        use: 'css-loader!sass-loader'
    }]
};

module.exports = config;