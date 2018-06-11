const path = require("path");
const BUILD = path.resolve(__dirname, "build");
const SRC = path.resolve(__dirname, "src");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: BUILD,
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: SRC,
                exclude: /(node_modules|bower_components|build)/,
                loader: "babel-loader"
            },

            {
                test: /\.json$/,
                use: "json-loader"
            }
        ]
    },
    externals: {
        React: "react"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};
