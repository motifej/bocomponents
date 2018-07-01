const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common.config, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        contentBase: common.buildDirectory,
        compress: true,
        historyApiFallback: true,
        stats: {
            colors: true
        },

        port: 8000
    }
});
