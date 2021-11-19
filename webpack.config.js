const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'dist'),
        // },
        static: './dist',
        compress: true,
        port: 9000,
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management',
    //     }),
    // ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
}