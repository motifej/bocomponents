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
        color: "#999999",
        top: "0px"
    }
};

const defaultFormStyle = {
    buttonWrapper: {
        margin: "0 auto"
    },
    input: {
        padding: "2px 0 0",
        fontWeight: "400",
        height: "32px",
        paddingTop: "10px",
        fontSize: "14px",
        lineHeight: "1.428571429",
        color: "#555",
        "&[rows]": {
            height: "auto"
        },
        width: "100%"
    },
    formLabel: {
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "1.4",
        fontWeight: "400",
        paddingTop: "22px",
        marginRight: "0",
        float: "right",
        textAlign: "right"
    },
    checkboxLabel: {
        fontWeight: "600"
    },
    formControlLabel: {
        color: "red"
    },
    dateInput: {
        width: "100%",
        "& label": { top: "5px" }
    },
    ...customCheckboxRadioSwitch,
    ...customSelectStyle
};

export default defaultFormStyle;
