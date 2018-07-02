import customCheckboxRadioSwitch from "../../mui-components/customCheckboxRadioSwitch.jsx";
import customSelectStyle from "../../mui-components/customSelectStyle.jsx";

export const formControlStyle = {
    selectFormControl: {
        height: "50px"
    },
    selectLabel: {
        fontSize: "12px",
        textTransform: "uppercase",
        top: "6px"
    },
    rangeFormControl: {
        height: "50px",
        margin:"20px 0 5px 0",
        flexDirection: "column",
        justifyContent: "center"
    },
    rangeLabel: {
        transform:"none",
        color: "rgba(0, 0, 0, 0.54)",
        top:"0",
        bottom:"auto",
        width:"100%",
        textAlign:"center"
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
