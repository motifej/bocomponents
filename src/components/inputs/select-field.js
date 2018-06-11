import Select from "@material-ui/core/Select";
import Subscribe from "./subscribe";
import { mapError } from "./utils";

export default Subscribe(
    Select,
    ({
        input: { onChange, value, onBlur, ...inputProps },
        onChange: onChangeFromField,
        ...props
    }) => ({
        ...mapError({ ...props, hasHelperText: false }),
        ...inputProps,
        value: value,
        onChange: event => {
            onChange(event.target.value);
            if (onChangeFromField) {
                onChangeFromField(event.target.value);
            }
        },
        onBlur: () => onBlur(value)
    })
);
