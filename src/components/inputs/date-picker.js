import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({
    input,
    placeholder,
    label,
    defaultValue,
    meta: { touched, error }
}) => (
    <div>
        <label htmlFor={input.name}>{label}</label>
        <DatePicker
            {...input}
            dateForm="MM/DD/YYYY"
            placeholderText={placeholder}
            selected={input.value ? moment(input.value, "MM/DD/YYYY") : null}
        />
        {touched && error && <span>{error}</span>}
    </div>
);

export default renderDatePicker;
