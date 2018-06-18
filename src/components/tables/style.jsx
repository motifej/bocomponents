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
        maxHeight: "500px",
        overflowY: "scroll"
    },
    table: {
        width: "100%",
        maxWidth: "100%",
        backgroundColor: "transparent",
        borderSpacing: "0",
        borderCollapse: "collapse",
        overflow: "auto",
        position: "relative",
        fontSize: "14px",
        color: "rgba(0, 0, 0, 0.87)",
        tableLayout: "fixed",
        minWidth:"1020px"

    },
    tableDataRow: {
        "&:hover": {
            backgroundColor: "#EDEDEE",
            cursor: "pointer"
        }
    },
    tableHeadRow: {
        height: "28px"
    },
    tableHeadRowFilter: {
        height: "20px"
    },
    tableHeadCell: {
        color: "rgba(0, 0, 0, 0.50)",
        border: "none !important",
        padding: "0 2px !important",
        verticalAlign: "top",
        fontSize: "0.9em",
        textAlign: "left",
        position: "sticky",
        fontWeight: "300",
        top: "0",
        zIndex: "2",
        background: "#FFF"
    },
    labelSpan: {
        alignItems: "flex-start"
    },
    tableHeadCellSortable: {
        "&:hover": {
            cursor: "pointer",
            color: "rgba(0, 0, 0, 0.87)"
        }
    },
    tableHeadCellFilter: {
        border: "none !important",
        padding: "0 2px !important",
        position: "sticky",
        top: "28px",
        zIndex: "2",
        background: "#FFF",
        "& input": {
            width: "100%"
        },
        "& > div": {
            width: "100%"
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
    backButtonImg: {
        position: "relative",
        right: "10px"
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
