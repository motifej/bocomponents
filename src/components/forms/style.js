import customCheckboxRadioSwitch from "../styles/customCheckboxRadioSwitch.jsx";
import customSelectStyle from "../styles/customSelectStyle.jsx";
import { primaryColor } from "../material-dashboard-pro-react.jsx";

export const formControlStyle = {
    selectFormControl: {
        "& > div": {
            "&:before": {
                height: "1px !important",
                borderBottomColor: "rgba(0, 0, 0, 0.42) !important"
            },
            "&:after": {
                backgroundColor: primaryColor
            }
        }
    },
    selectLabel: {
        fontSize: "12px",
        textTransform: "uppercase",
        top: "6px"
    }
};

const defaultFormStyle = {
    buttonWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        padding: "15px 0",
        width: "100%"
    },
    formButton: {
        display: "inline-flex",
        margin: "15px"
    },
    input: {
        padding: "0",
        margin: "5px 0 0 0",
        height: "auto",
        "& input": {
            height: "auto !important"
        },
        "& > div": {
            marginTop: "12px"
        },
        "& label": {
            fontSize: "14px"
        },
        width: "100%"
    },

    checkboxLabel: {
        fontWeight: "600"
    },
    ...customCheckboxRadioSwitch,
    ...customSelectStyle
};

export default defaultFormStyle;
