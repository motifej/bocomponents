import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import { formControlStyle } from "./style";

export const setStyle = (type, styles) =>
	type === "select"
		? styles.select
		: type === "checkbox"
			? styles.checkbox
			: styles.input;

export const setFormat = (value, multiple) =>
	!multiple ? value || "" : multiple && Array.isArray(value) ? value : [];

export const wrrapWithFormControlLabel = (component, label) => (
	<FormControlLabel control={component} label={label} />
);

export const wrapWithFormControl = component => {
	const { label } = component.props;
	return (
		<FormControl fullWidth style={formControlStyle.selectFormControl}>
			<InputLabel style={formControlStyle.selectLabel}>
				{"Select " + label}
			</InputLabel>
			{component}
		</FormControl>
	);
};
