import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const generateLabel = (valuesArr, value) => {
//Labels gen logic here.
    return value;
};

const RenderInputRange = ({
    input: { onChange, ...inputParams },
    ...params
}) => {
    const rangeValues = Object.values(params.valuesMap)[0];
    return (
        <InputRange
            draggableTrack
            maxValue={rangeValues.length}
            minValue={1}
            formatLabel={value => generateLabel(rangeValues, value)}
            onChange={values => {
                onChange(values);
            }}
            {...inputParams}
            {...params}
        />
    );
};

export default RenderInputRange;
