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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.json$/,
                type: "javascript/auto",
                use: "json-loader"
            }
        ]
    },
    externals: {
        React: "react"
    },
    resolve: {
        alias: {
            "inputs/TextField": path.resolve(
                __dirname,
                "src/components/inputs/text-field.js"
            ),
            "inputs/Checkbox": path.resolve(
                __dirname,
                "src/components/inputs/checkbox.js"
            ),
            "inputs/SelectField": path.resolve(
                __dirname,
                "src/components/inputs/select-field.js"
            )
        },
        extensions: [".js", ".jsx"]
    }
};
