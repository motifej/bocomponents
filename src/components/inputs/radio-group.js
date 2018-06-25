import RadioGroup from "@material-ui/core/RadioGroup";
import Subscribe from "./subscribe";

export default Subscribe(
	RadioGroup,
	({
		input: { onChange, value, ...inputProps },
		meta,
		onChange: onChangeFromField,
		...props
	}) => ({
		...inputProps,
		...props,
		value,
		onChange: (event, value) => {
			onChange(value);
			if (onChangeFromField) {
				onChangeFromField(value);
			}
		}
	})
);
