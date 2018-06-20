import React from "react";
import InputRange from "react-input-range";

import "react-input-range/lib/css/index.css";

const RenderInputRange = ({
    input: { onChange, ...inputParams },
    ...params
}) => {
    return (
        <InputRange
            draggableTrack
            maxValue={20}
            minValue={0}
            formatLabel={value => (value === 1 ? "first" : value)}
            {...inputParams}
            {...params}
            onChange={values => {
                onChange(values);
            }}
        />
    );
};

export default RenderInputRange;
