import React from "react";
import Range from "rc-slider/lib/Range";
import TextField from "./text-field";
import "rc-slider/assets/index.css";

const handleInputChange = (e, max) => {
    const value = e.target.value;
    if (value === "") {
        return " ";
    }
    if (value > max) {
        return parseInt(max);
    }

    return parseInt(value);
};

const SliderWithInputs = props => {
    const {
        input: { value, onChange, ...inputProps }
    } = props;
    const [currMin, currMax] = value && value;
    const { min, max, defaultValue } = props.rangeProps;
    return (
        <div>
            <TextField
                value={value ? parseInt(currMin) : min}
                type="number"
                min={min}
                onChange={e => {
                    const newValues = [
                        handleInputChange(e, max),
                        currMax || max
                    ];
                    onChange(newValues);
                }}
            />
            <Range
                value={value ? value : [min, max]}
                defaultValue={defaultValue}
                onChange={values => {
                    onChange(values);
                }}
                {...inputProps}
                {...props.rangeProps}
                {...props.meta}
            />
            <TextField
                value={value ? parseInt(currMax) : max}
                type="number"
                max={max}
                onChange={e => {
                    const newValues = [
                        currMin || min,
                        handleInputChange(e, props)
                    ];
                    onChange(newValues);
                }}
            />
        </div>
    );
};

export default SliderWithInputs;
