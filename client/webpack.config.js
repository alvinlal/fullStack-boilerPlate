const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //webpack will take the files from ./src/index
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '/dist'), //The final production build will be placed on dist folder
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'], //Adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', //we use babel-loader to load our jsx and tsx files
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //for loading css
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/, //for loading image files
                exclude: /node_modules/,
                use: ['file-loader'],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        stats: {
            //stats object is used to control console logging of webpack
            modules: false,
            assets: false,
            children: false,
            colors: true,
            entrypoints: false,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
