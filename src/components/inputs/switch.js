import Switch from "@material-ui/core/Switch";
import Subscribe from "./subscribe";

export default Subscribe(
	Switch,
	({
		input: { onChange, value, ...inputProps },
		checked,
		meta,
		...props
	}) => ({
		...inputProps,
		...props,
		onChange,
		checked: !!value
	})
);
