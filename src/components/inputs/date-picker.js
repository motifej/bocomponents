import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

import "../styles/react-datepicker.css";

const style = {
    container: {
        padding: "15px 0 0 0",
        display: "flex",
        flexDirection: "row"
    },
    label: {
        color: "rgba(0, 0, 0, 0.54)",
        fontSize: "14px",
        padding: "10px 10px 0 0"
    }
};

const renderDatePicker = ({
    input,
    placeholder,
    label,
    meta: { touched, error }
}) => (
    <div style={style.container}>
        {label ? (
            <label htmlFor={input.name} style={style.label}>
                {label}
            </label>
        ) : (
            <div />
        )}
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
