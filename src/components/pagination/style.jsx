const paginationStyle = {
    pagination: {
        zIndex: "1",
        display: "flex",
        justifyContent: " space-between",
        alignItems: "stretch",
        flexWrap: "wrap",
        padding: "3px",
        boxShadow: "0 0px 15px 0px rgba(0, 0, 0, 0.1)",
        borderTop: "2px solid rgba(0, 0, 0, 0.1)",
        width: "99%",
        height: "50px",
        margin: "10px 0 20px 0"
    },

    btnContainer: {
        flex: "1",
        textAlign: "center"
    },
    btn: {
        appearance: "none",
        display: "block",
        width: "100%",
        height: "100%",
        border: "0",
        borderRadius: "3px",
        padding: "6px",
        fontSize: "1em",
        color: "rgba(0, 0, 0, 0.6)",
        background: "rgba(0, 0, 0, 0.1)",
        transition: "all 0.1s ease",
        cursor: "pointer",
        outline: "none",
        "&:hover": {
            background: "rgba(0, 0, 0, 0.3)",
            color: "#fff"
        },
        "&[disabled]": {
            opacity: "0.5",
            cursor: "default",
            "&:hover": {
                color: "rgba(0, 0, 0, 0.6)",
                background: "rgba(0, 0, 0, 0.1)"
            }
        }
    },
    center: {
        flex: "1.5",
        textAlign: "center",
        marginBottom: "0",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around"
    },
    pageInfo: {
        display: "inline-block",
        margin: "3px 10px",
        whiteSpace: "nowrap",
        color: "rgba(0, 0, 0, 0.54)",
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    pageJump: {
        display: "inline-block",
        margin: "0 5px"
    },

    pageInput: {
        border: "0",
        backgroundImage:
            "linear-gradient(#9c27b0, #9c27b0), linear-gradient(#d2d2d2, #d2d2d2)",
        backgroundSize: "0 2px, 100% 1px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom, center calc(100% - 1px)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        transition: "background 0s ease-out",
        float: "none",
        boxShadow: "none",
        borderRadius: "0",
        fontWeight: "400",
        width: "100%",
        height: "24px",
        padding: "7px 0",
        fontSize: "14px",
        lineHeight: "1.428571429",
        display: "block",
        color: "rgba(0, 0, 0, 0.87)",
        textAlign: "center",
        "&:focus": {
            outline: "none",
            backgroundImage:
                "linear-gradient(#9c27b0, #9c27b0),linear-gradient(#d2d2d2, #d2d2d2)",
            backgroundSize: "100% 2px, 100% 1px",
            boxShadow: "none",
            transitionDuration: "0.3s"
        }
    },
    totalPages: {
        marginLeft: "5px"
    }
};

export default paginationStyle;
