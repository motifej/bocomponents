import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const generateLabel = (valuesMap , value) => {
    current = valuesMap.filter((val)=>{
            return val.value === value
    })
    return current.label
}

const RenderInputRange = ({
    input: { onChange, ...inputParams },
    ...params
}) => {
    console.log("slider params", onChange)
    return (
        <InputRange
            draggableTrack
            maxValue={20}
            minValue={0}
            formatLabel={value => `${value} kg`}
            onChange={values => {
                onChange(values);
            }}
            {...inputParams}
            {...params}
        />
    );
};

export default RenderInputRange;
