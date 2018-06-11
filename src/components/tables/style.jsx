import {
    warningColor,
    primaryColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    defaultFont
} from "../material-dashboard-pro-react.jsx";

const tableStyle = theme => ({
    tableContainer: {
        width: "100%",
        margin: "0 !important",
        overflowX: "auto",
        maxHeight:"500px",
        overflowY:"scroll"
    },
    table: {
        marginBottom: "0",
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        overflow: "auto",
        position: "relative",
        fontSize: "14px",
        color: "rgba(0, 0, 0, 0.87)",
        tableLayout: "fixed"

    },
    tableDataRow: {
        "&:hover": {
            backgroundColor: "#EDEDEE",
            cursor:"pointer"
        }
    },
    tableHeadCell: {
        color: "rgba(0, 0, 0, 0.54)",
        border: "none !important",
        lineHeight: "1.42857143",
        padding: "12px 8px!important",
        verticalAlign: "top",
        fontSize: "0.9em",
        "&:hover": {
            color: "rgba(0, 0, 0, 0.87)"
        }
    },
    tableDataCell: {
        ...defaultFont,
        lineHeight: "1.42857143",
        padding: "12px 8px!important",
        verticalAlign: "middle",
        fontSize: "1em",
        borderBottom: "none",
        borderTop: "1px solid #ddd",
        position: "relative",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis"
    },
    noResults: {
        margin: "0 auto",
        fontSize: "20px"
    },
    backButtonImg:{
        position:"relative",
        right:"10px"
    },
    warning: {
        color: warningColor
    },
    primary: {
        color: primaryColor
    },
    danger: {
        color: dangerColor
    },
    success: {
        color: successColor
    },
    info: {
        color: infoColor
    },
    rose: {
        color: roseColor
    },
    gray: {
        color: grayColor
    }
});

export default tableStyle;
