import {
    primaryColor,
    primaryBoxShadow
} from "../material-dashboard-pro-react.jsx";

const customSelectStyle = {
    select: {
        padding: "4px 0 7px",
        lineHeight: "30px !important",
        margin: "0 0 4px 0 !important",
        fontSize:"14px !important",
        "&:focus": {
            backgroundColor: "transparent"
        },
        "&[aria-owns] + input + svg": {
            transform: "rotate(180deg)"
        },
        "& + input + svg": {
            transition: "all 300ms linear"
        }
    },
    selectFormControl: {
        "& > div": {
            "&:before": {
                height: "1px !important",
                borderBottomColor:"rgba(0, 0, 0, 0.42) !important"

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
    },
    selectMenu: {
        "& > div": {
            boxSizing: "borderBox",
            borderRadius: "4px",
            padding: "0",
            minWidth: "100%",
            display: "block",
            border: "0",
            boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
            backgroundClip: "padding-box",
            margin: "2px 0 0",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: "transparent"
        },
        "& > div > ul": {
            border: "0",
            padding: "5px 0",
            margin: "0",
            boxShadow: "none",
            minWidth: "100%",
            borderRadius: "4px",
            boxSizing: "border-box",
            display: "block",
            fontSize: "14px",
            textAlign: "left",
            listStyle: "none",
            backgroundColor: "#fff",
            backgroundClip: "padding-box"
        }
    },
    selectMenuItem: {
        fontSize: "13px",
        padding: "10px 20px",
        margin: "0 5px",
        borderRadius: "2px",
        transition: "all 150ms linear",
        display: "block",
        clear: "both",
        fontWeight: "400",
        lineHeight: "2",
        whiteSpace: "nowrap",
        color: "#333",
        "&:hover": {
            backgroundColor: primaryColor,
            color: "#FFFFFF",
            ...primaryBoxShadow
        }
    },
    selectMenuItemSelected: {
        backgroundColor: primaryColor + "!important",
        color: "#FFFFFF"
    }
};

export default customSelectStyle;
