const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common.config, {
    mode: "production",
    externals: {
        react: "umd react",
        "react-dom": "umd react-dom"
    }
});
