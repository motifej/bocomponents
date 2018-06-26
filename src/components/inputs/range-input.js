import React from "react";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";

const RenderInputRange = props => {
    const {
        input: { name, onBlur, onDragStart, onDrop, onFocus, onChange }
    } = props;
    return (
        <Range
            onChange={values => {
                onChange(values);
            }}
            name={name}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onFocus={onFocus}
            onBlur={onBlur}
            {...props.rangeProps}
            {...props.meta}
        />
    );
};

export default RenderInputRange;
