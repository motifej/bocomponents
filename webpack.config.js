const path = required("path");
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
                test: /\.js$/,
                include: SRC,
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    externals: {
        react: "commonjs react",
        "react-dom": "ReactDom"
    }
};
