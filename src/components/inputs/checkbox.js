import Checkbox from "@material-ui/core/Checkbox";
import Subscribe from "./subscribe";

export default Subscribe(
    Checkbox,
    ({
        input: { onChange, value, ...inputProps },
        meta,
        onChange: ignoredOnChange,
        defaultChecked,
        ...props
    }) => ({
        ...inputProps,
        ...props,
        checked: value ? true : false,
        onChange: (event, isInputChecked) => {
            onChange(isInputChecked);
        }
    })
);
