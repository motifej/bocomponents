import React from "react";
import Range from "rc-slider/lib/Range";
import TextField from "./text-field";
import "rc-slider/assets/index.css";

const handleInputChange = (e, props) => {
    const value = e.target.value;
    if (value === "") {
        return " ";
    }
    if (props.rangeProps.max < value) {
        return parseInt(props.rangeProps.max);
    }

    return parseInt(value);
};

const SliderWithInputs = props => {
    const {
        input: { name, onBlur, onDragStart, onDrop, onFocus, onChange, value }
    } = props;
    return (
        <div style={{ width: "40%" }}>
            <TextField
                value={value ? parseInt(value[0]) : props.rangeProps.min}
                type="number"
                min={props.rangeProps.min}
                onChange={e => {
                    const newValues = [
                        handleInputChange(e, props),
                        value[1] || props.rangeProps.max
                    ];
                    onChange(newValues);
                }}
                required={true}
            />
            <Range
                name={name}
                onDragStart={onDragStart}
                onDrop={onDrop}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props.rangeProps}
                {...props.meta}
                value={
                    value ? value : [props.rangeProps.min, props.rangeProps.max]
                }
                defaultValue={props.rangeProps.defaultValue}
                step={1}
                onChange={values => {
                    onChange(values);
                }}
            />
            <TextField
                value={value ? parseInt(value[1]) : props.rangeProps.max}
                type="number"
                max={props.rangeProps.max}
                onChange={e => {
                    const newValues = [
                        value[0] || props.rangeProps.min,
                        handleInputChange(e, props)
                    ];
                    onChange(newValues);
                }}
            />
        </div>
    );
};

export default SliderWithInputs;
