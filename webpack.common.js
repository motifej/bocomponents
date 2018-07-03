const path = require("path");

const directionName = __dirname;
const BUILD = path.resolve(directionName, "build");
const SRC = path.resolve(directionName, "src");

const config = {
    entry: {
        main: ["babel-polyfill", "./src/index"]
    },
    output: {
        path: BUILD,
        filename: "[name].bundle.js",
        libraryTarget: "amd"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: SRC,
                exclude: /(node_modules|bower_components|build)/
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
    resolve: {
        alias: {
            "inputs/TextField": path.resolve(
                directionName,
                "src/components/inputs/text-field"
            ),
            "inputs/Checkbox": path.resolve(
                directionName,
                "src/components/inputs/checkbox"
            ),
            "inputs/SelectField": path.resolve(
                directionName,
                "src/components/inputs/select-field"
            ),
            "inputs/datePicker": path.resolve(
                directionName,
                "src/components/inputs/date-picker"
            ),
            "inputs/sliderWithInputs": path.resolve(
                directionName,
                "src/components/inputs/slider-with-inputs"
            ),
            "inputs/rangeInput": path.resolve(
                directionName,
                "src/components/inputs/range-input"
            ),
            "MUI/styles": path.resolve(
                directionName,
                "src/mui-components/material-dashboard-pro-react"
            ),
            "MUI/Grid/GridContainer": path.resolve(
                directionName,
                "src/mui-components/Grid/GridContainer/"
            ),
            "MUI/Grid/ItemGrid": path.resolve(
                directionName,
                "src/mui-components/Grid/ItemGrid/"
            ),
            "MUI/Cards/IconCard": path.resolve(
                directionName,
                "src/mui-components/Cards/IconCard/"
            ),
            "MUI/CustomButton": path.resolve(
                directionName,
                "src/mui-components/CustomButton/"
            ),
            "MUI/Cards/HeaderCard": path.resolve(
                directionName,
                "src/mui-components/Cards/HeaderCard"
            ),
            "subscribe/table": path.resolve(
                directionName,
                "src/components/tables/subscribe"
            ),
            "subscribe/pagination": path.resolve(
                directionName,
                "src/components/pagination/subscribe"
            ),
            "subscribe/filter": path.resolve(
                directionName,
                "src/components/filter/subscribe"
            ),
            "subscribe/sort": path.resolve(
                directionName,
                "src/components/sort/subscribe"
            ),
            "tables/default": path.resolve(
                directionName,
                "src/components/tables/views/default-table"
            ),
            "forms/default": path.resolve(
                directionName,
                "src/components/forms/views/default-form"
            )
        },
        extensions: [".js", ".jsx"]
    }
};

module.exports = { config: config, buildDirectory: BUILD };
